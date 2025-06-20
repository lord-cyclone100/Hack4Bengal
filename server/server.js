import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import UserModel from "./models/UserModel.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

const FRONTEND_URL = process.env.FRONTEND_URL;
const BACKEND_URL = process.env.BACKEND_URL;
const MONGO_URI = process.env.MONGO_URI;

const corsOptions = {
  origin: FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Accept'],
  credentials: true
};



app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(MONGO_URI);

// Login route
app.post('/login', async (req, res) => {
  const { userName, email, walletId } = req.body;
  console.log(userName, email, walletId);

  try {
    await UserModel.create({
      userName,
      email,
      walletId
    });

    res.status(200).json({ message: "User created successfully" });
  }

  catch (err) {
    res.status(500).json({ message: "Error logging in" , err: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on ${BACKEND_URL}`);
});
