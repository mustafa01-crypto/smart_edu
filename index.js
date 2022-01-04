const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

const pageRouter = require("./routes/pageRoutes");
const courseRouter = require("./routes/courseRoutes");
const categoryRoute = require('./routes/categoryRoute')

//Conect to DB
mongoose.connect('mongodb://localhost/smart-edu');

//Template Engine

app.set("view engine", "ejs");

//MiddleWare

app.use(express.static("public"));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

//Routes
app.use("/", pageRouter);
app.use("/courses", courseRouter);
app.use('/categories',categoryRoute)

const port = 3000;
app.listen(port, () => {
  console.log("Success 3000");
});
