const express = require("express");
const app = express();
const port = 5000;

const { User } = require("./models/user");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hjs926:gkgk13@boilerplate.apwh2sx.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParse: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  const user = new User();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
