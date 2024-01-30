const mongoose = require("mongoose");
var categorieSchema = new mongoose.Schema({
  name:{
    type:String,
    required: [true, 'Le nom de la categorie est obligatoire'],
    unique: [true, 'Le nom de la categorie est unique'],
    minlength: [3, 'Mettre un nom superieur ou egal a 3']
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

module.exports = mongoose.model("Categorie", categorieSchema);
