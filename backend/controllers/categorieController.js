const express = require("express"),

User = require("../models/user"),
Article = require("../models/article");
Categorie = require("../models/categorie");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.find();
    res.json({ 
      status: "Success",
      message: {
        categories: categories,
      }
    });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
};

const getCategorieById = async (req, res) => {
  try {
      const categorie = await Categorie.findById(req.params.id);
      res.json({ 
        status: "Success",
        message: {
          categorie: categorie,
        }
      });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
};

const addCategorie = async (req, res) => {
  const newCategorie = new Categorie(req.body);
  try {
      const categorie = await newCategorie.save();
      res.json({ 
        status: "Success",
        message: {
          categorie: categorie,
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

const updateCategorie = async (req, res) => {
  try {
      const categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ 
        status: "Success",
        message: {
          categorie: categorie,
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

const deleteCategorie = async (req, res) => {
  try {
      const categorie = await Categorie.findByIdAndDelete(req.params.id);
      res.json({ 
        status: "Success",
        message: "Successful delete category"
      });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
}

const countCategories = async (req, res) => {
  try {
      const count = await Categorie.countDocuments();
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
  getAllCategories,
  getCategorieById,
  addCategorie,
  updateCategorie,
  deleteCategorie,
  countCategories
};