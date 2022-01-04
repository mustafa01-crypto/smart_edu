const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MongoStore = require('connect-mongo');
const session = require('express-session');
const app = express();

const pageRouter = require("./routes/pageRoutes");
const courseRouter = require("./routes/courseRoutes");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoutes");

//Conect to DB
mongoose.connect("mongodb://localhost/smart-edu");

//Template Engine

app.set("view engine", "ejs");
global.userIN = null;

//MiddleWare

app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my_secret_key",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smart-edu' })
  })
);

//Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/", pageRouter);
app.use("/courses", courseRouter);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = 3000;
app.listen(port, () => {
  console.log("Success 3000");
});
