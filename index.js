const express = require("express");
const mongoose = require('mongoose');
const app = express();

const pageRouter = require("./routes/pageRoutes");
const courseRouter = require("./routes/courseRoutes");

//Conect to DB
mongoose.connect('mongodb://localhost/smart-edu');

//Template Engine

app.set("view engine", "ejs");

//MiddleWare

app.use(express.static("public"));

//Routes
app.use("/", pageRouter);
app.use("/courses", courseRouter);

const port = 3000;
app.listen(port, () => {
  console.log("Success 3000");
});
