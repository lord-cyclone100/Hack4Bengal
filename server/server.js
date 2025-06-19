import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { CookieStorage, CivicAuth } from "@civic/auth/server";
import UserModel from "./models/UserModel";

const app = express();
const port = process.env.PORT || 3000;

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${port}`;

const corsOptions = {
  origin: FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

const config = {
  clientId: process.env.CIVIC_CLIENT_ID,
  redirectUrl: `${BACKEND_URL}/auth/callback`, // Goes to this link during login
  postLogoutRedirectUrl: FRONTEND_URL // Redirect user to frontend after logout
};

// Custom cookie storage using express req/res
class ExpressCookieStorage extends CookieStorage {
  constructor(req, res) {
    super({ secure: false }); // Set true in production with HTTPS
    this.req = req;
    this.res = res;
  }

  async get(key) {
    return this.req.cookies[key] ?? null;
  }

  async set(key, value) {
    this.res.cookie(key, value, this.settings);
  }
}

app.use(cookieParser());
app.use(cors(corsOptions));

// Middleware to attach civicAuth to each request
app.use((req, res, next) => {
  req.storage = new ExpressCookieStorage(req, res);
  req.civicAuth = new CivicAuth(req.storage, config);
  next();
});

// Callback handler
app.get('/auth/callback', async (req, res) => { // Executed while logging in 
  const { code, state } = req.query;
  await req.civicAuth.resolveOAuthAccessCode(code, state);
  res.redirect(`${FRONTEND_URL}/dashboard`); // where we want to redirect after login

  const userData = await CivicAuth.getUser();

  // const userExists = await UserModel.findOne({email: userData})
});

// Login route
app.get('/login', async (req, res) => {
  const url = await req.civicAuth.buildLoginUrl();
  res.redirect(url.toString()); // goes to the api "/auth/callback/..."
});

// Logout route
app.get('/logout', async (req, res) => {
  const url = await req.civicAuth.buildLogoutRedirectUrl();
  res.redirect(url.toString());
});

// Authenticated user check
app.get('/profile', async (req, res) => {
  const user = await req.civicAuth.getUser();
  if (!user) return res.status(401).json({ error: 'Not authenticated' });
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on ${BACKEND_URL}`);
});
