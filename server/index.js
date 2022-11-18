const cors = require("cors");
const express = require("express");

//create express app
const app = express();

//configure app
app.use(cors());

//example backend route
app.get("/ping", (req, res) => {
  res.json({ mode: process.env.NODE_ENV, time: +Date.now() });
});

//start backend
app.listen(process.env.PORT);

//log app start
console.log(
  `Backend server in ${process.env.NODE_ENV} mode started on port ${process.env.PORT}!`,
);
