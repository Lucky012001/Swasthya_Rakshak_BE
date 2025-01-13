const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
    patient_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    emergency_contact: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    medical_history: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    reason_for_visit: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    profile_picture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    admit_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    disease: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Patient;
