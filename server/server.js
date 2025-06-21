import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import UserModel from "./models/UserModel.js";
import CardModel from "./models/CardModel.js";

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
    res.status(500).json({ message: "Error logging in", err: err.message });
  }
});

app.post("/create-tournament", async (req, res) => {
  const { title, description, hostName, pictureUrl, startdate, deadline, prizeMoney } = req.body;

  const currentDate = new Date().toISOString().split('T')[0];
  const isLive = deadline > currentDate;

  try {
    const host = await UserModel.findOne({ email: hostName });
    // console.log(host);

    if (!host) {
      return res.status(404).json({ message: "Please sign in first" });
    }

    await CardModel.create({
      title,
      description,
      hostName: host._id,
      pictureUrl,
      startdate,
      deadline,
      isLive,
      prizeMoney
    });

    res.status(200).json({ message: "Hosted tournament succesfully" });
  }

  catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Error creating card", err: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on ${BACKEND_URL}`);
});
