const express = require("express");
const app = express();
const port = 5000;

mongodb+srv://hjs926:<password>@boilerplate.apwh2sx.mongodb.net/?retryWrites=true&w=majority

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
