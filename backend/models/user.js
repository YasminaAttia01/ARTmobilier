const mongoose = require("mongoose"),
passportLocalMongoose = require("passport-local-mongoose");

const validator = require('validator')

var userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Le nom est obligatoire'],
  },
  username:{
    type:String,
    required: [true, 'Le username est obligatoire'],
    unique: [true, 'Le username est unique'],
  },
  email:{
    type:String,
    required: [true, 'L\'email est obligatoire'],
    trim: true,
    unique: [true, 'L\'email est unique'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('L\'email est invalide');
      }
    }
  },
  password:{
    type:String,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type:Date, 
    default: Date.now
  },
  updatedAt: {
    type:Date, 
    default: Date.now
  }
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
