const express = require("express"),

User = require("../models/user"),
Article = require("../models/article");
Categorie = require("../models/categorie");

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('categorie');
    res.json({ 
      status: "Success",
      message: {
        articles: articles,
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

const getArticleById = async (req, res) => {
  try {
      const article = await Article.findById(req.params.id).populate('categorie');
      res.json({ 
        status: "Success",
        message: {
          articles: article,
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

const addArticle = async (req, res) => {
  const newArticle = new Article(req.body);
  try {
      const article = await newArticle.save();
      res.json({ 
        status: "Success",
        message: {
          articles: article,
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

const updateArticle = async (req, res) => {
  try {
      const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ 
        status: "Success",
        message: {
          articles: article,
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

const deleteArticle = async (req, res) => {
  try {
      const article = await Article.findByIdAndDelete(req.params.id);
      res.json({ 
        status: "Success",
        message: "Successful delete article"
      });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
}

const countArticles = async (req, res) => {
  try {
      const count = await Article.countDocuments();
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
  getAllArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
  countArticles
};