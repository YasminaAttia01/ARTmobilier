const express = require("express"),

User = require("../models/user"),
Commande = require("../models/commande");

const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find().populate('commandeDetail').populate('user');
    res.json({ 
      status: "Success",
      message: {
        commandes: commandes,
      }
    });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
};

const getCommandeById = async (req, res) => {
  try {
      const commande = await Commande.findById(req.params.id).populate('commandeDetail').populate('user');
      res.json({ 
        status: "Success",
        message: {
          commande: commande,
        }
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
};

const addCommande = async (req, res) => {
  console.log(req.body)
  req.body.total = parseInt(req.body.total)
  const newCommande = new Commande(req.body);
  try {
      const commande = await newCommande.save();
      res.json({ 
        status: "Success",
        message: {
          commande: commande,
        }
      });
  } 
  catch (error) {
    console.log(error)
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

const updateCommande = async (req, res) => {
  try {
      const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ 
        status: "Success",
        message: {
          commande: commande,
        }
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

const deleteCommande = async (req, res) => {
  try {
      const commande = await Commande.findByIdAndDelete(req.params.id);
      res.send({ message: "Successful" });
      res.json({ 
        status: "Success",
        message: "Successful delete commande"
      });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
}

const countCommandes = async (req, res) => {
  try {
      const count = await Commande.countDocuments();
      res.json({ 
        status: "Success",
        message: {
          count: count,
        }
      });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
}

module.exports = {
  getAllCommandes,
  getCommandeById,
  addCommande,
  updateCommande,
  deleteCommande,
  countCommandes
};