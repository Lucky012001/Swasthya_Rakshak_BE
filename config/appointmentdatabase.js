const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
  dialect: 'mysql',  // or postgres, depending on your database
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = db;
