const mongoose = require("mongoose");
var commandeSchema = new mongoose.Schema({
    total: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    commandeDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommandeDetail',
        required: true
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

module.exports = mongoose.model("commande", commandeSchema);