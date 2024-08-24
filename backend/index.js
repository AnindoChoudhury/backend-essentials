require("dotenv").config();
const express = require("express");
const connect = require("./src/db/db.js");
const app = express();

const PORT = process.env.PORT;

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("MongoDB connected");
    });
  })
  .catch((err) => {
    console.log("Error in connecting MongoDb");
  });
