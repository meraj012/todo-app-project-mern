import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
2;
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

// database connection code
try {
  mongoose.connect(DB_URI);
  console.log("database connected successfully.");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`app is listening on the port ${PORT}`);
});
