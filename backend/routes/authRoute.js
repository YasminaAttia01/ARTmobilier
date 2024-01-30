const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController')
const auth = require("../middleware/auth")();

User = require('../models/user');

/* Creer un compte */
router.post("/register", authController.register)

/* Se connecter*/
router.post("/login", passport.authenticate("local"), authController.login)

module.exports = router