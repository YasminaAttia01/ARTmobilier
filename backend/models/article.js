const mongoose = require("mongoose");
var articleSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique: true,
    minlength: [3, 'Must be at least 3 characters.']
  },
  description:{
    type:String,
  },
  image:{
    type:String,
    required: [true, 'Le nom de l\'article est obligatoire'],
  },
  prix:{
    type:Number,
    required: [true, 'Le prix de l\'article est obligatoire'],
  },
  qt: {
    type: Number,
    default: 1
  },
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorie',
    required: [true, 'L\'Id de l\'article est obligatoire'],
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

module.exports = mongoose.model("Article", articleSchema);
