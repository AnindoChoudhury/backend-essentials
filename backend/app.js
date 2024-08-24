const express = require("express");
const cookieParser = require("cookie-parser");

const express = require("express");

const app = express();
app.use(cors());
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(3000);
module.exports = { app };
