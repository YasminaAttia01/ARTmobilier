require("dotenv").config({path: '.env'});
const express = require("express"),
app = express(),

session = require("express-session"),
dbConfig = require("./config/dbConfig"),
auth = require('./middleware/auth.js')(),
mongoose = require("mongoose"),
passport = require("passport"),
localStrategy = require("passport-local"),
bodyParser = require("body-parser");
cors = require('cors');

User = require("./models/user"),

authRoute = require("./routes/authRoute"),
adminRoute = require("./routes/adminRoute"),
appRoute = require("./routes/appRoute");

dbConfig.dbconnexion()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'SECRET',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(auth.initialize());

// Passport
passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Route
app.use('/', appRoute);
app.use('/auth', authRoute);
app.use('/backoffice', adminRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on:${process.env.PORT}`);
})
