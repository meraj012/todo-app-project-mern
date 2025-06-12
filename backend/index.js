import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import todoRoute from "../backend/routes/todo.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;
const DB_URI = process.env.MONGODB_URI;

// database connection code
try {
  await mongoose.connect(DB_URI);
  console.log("database connected successfully.");
} catch (error) {
  console.log(error);
}

// routes
app.use(express.json());
app.use("/todo", todoRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`app is listening on the port ${PORT}`);
});
