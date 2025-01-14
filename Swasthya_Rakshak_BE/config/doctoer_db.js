const { Sequelize } = require('sequelize');
require('dotenv').config();  // Load environment variables

// Fetch the environment variables
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

// Initialize Sequelize with the correct configuration
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT  // Ensure dialect is provided correctly
});

module.exports = sequelize;
