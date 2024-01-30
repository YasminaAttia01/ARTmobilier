const express = require("express"),
authConfig = require("../config/authConfig"),
jwt = require("jwt-simple");

User = require("../models/user");

const register = (req, res) => {
  User.register(
      new User({ name: req.body.name, username: req.body.username, email: req.body.email }),
      req.body.password,
      function (err, msg) {
        if (err) {
          res.json({ 
            status: "Error",
            message: "Error register" 
          });
        } 
        else {
          res.json({
            status: "Success",
            message: "Successful register" 
          });
        }
      }
    );
};

const login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        res.json({ 
          status: "Error",
          message: "Error Happened In auth /token Route" 
        });
      } 
      else {
        var payload = {
          id: user.id,
          expire: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
        };
        var token = jwt.encode(payload, authConfig.jwtSecret);
        res.json({ 
          status: "Success",
          message: {
            user: user,
            token: token
          }
        });
      }
    });
};

module.exports = {
  login,
  register
};
