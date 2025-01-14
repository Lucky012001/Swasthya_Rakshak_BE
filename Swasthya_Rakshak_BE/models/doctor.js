// /models/doctor.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/doctoer_db');

const Doctor = sequelize.define('Doctor', {
    doctor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specialization: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qualifications: {
        type: DataTypes.STRING,
        allowNull: true
    },
    medical_license_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    consultation_fees: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    working_hours: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hospital_clinic_address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    profile_picture: {
        type: DataTypes.STRING,
        allowNull: true
    },
    emergency_contact_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    room_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profile_status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
});

module.exports = Doctor;



 