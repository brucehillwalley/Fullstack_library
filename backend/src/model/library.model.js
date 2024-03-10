"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LİBRARY Project with Sequelize
------------------------------------------------------- */
// MODELS:

const { Sequelize, DataTypes } = require("sequelize");
// sequelize instance oluştur:
const sequelize = new Sequelize("sqlite:./db.sqlite3");

const Library = sequelize.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  author: { type: DataTypes.STRING, allowNull: false }, // ShortHand Using.

  ISBN: {
   
    type: DataTypes.STRING,
    allowNull: false,
    
  },

  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "unknown",
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image:{
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "https://cdn.pixabay.com/photo/2018/04/17/09/02/child-3326960_640.png",
  }
});

// Syncronization:
// Model bilgilerini db'ye uygula:
sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

// Connect to db:
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch(() => console.log("* DB Not Connected *"));

module.exports = Library;
