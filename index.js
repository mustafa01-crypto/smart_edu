const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MongoStore = require('connect-mongo');
const session = require('express-session');
const app = express();
const fileUpload = require("express-fileupload");
const pageRouter = require("./routes/pageRoutes");
const courseRouter = require("./routes/courseRoutes");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoutes");
const photoRoute = require('./routes/photoRoute');
const flash = require('connect-flash');

//Conect to DB
mongoose.connect("mongodb://localhost/smart-edu");

//Template Engine

app.set("view engine", "ejs");
global.userIN = null;

//MiddleWare
app.use(fileUpload());
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
app.use(flash());
app.use((req, res, next)=> {
  res.locals.flashMessages = req.flash();
  next();
})

//Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/", pageRouter);
app.use("/courses", courseRouter);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);
app.use('/users',photoRoute);

const port = 3000;
app.listen(port, () => {
  console.log("Success 3000");
});
