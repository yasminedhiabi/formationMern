
// import test from './test.js'
// console.log("this is my server:")
// test(2,6)
import mongoose from "mongoose";
import express from "express";
const app = express();

app.get("/verify", (req, res) => {
  res.send("Welcome to my server");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
mongoose.connect('mongodb://127.0.0.1:1701/dantabase')
  .then(() => console.log('Connected!'));