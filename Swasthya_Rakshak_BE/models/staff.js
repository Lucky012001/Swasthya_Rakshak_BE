const { Sequelize, DataTypes } = require("sequelize");

// Configure Sequelize with database credentials
const sequelize = new Sequelize("swasthya_rakshak", "root", "l@rajput", {
    host: "localhost",
    dialect: "mysql",
});

// Test connection
sequelize
    .authenticate()
    .then(() => console.log("Database connected..."))
    .catch((err) => console.error("Error connecting to database:", err));

const Staff = sequelize.define("Staff", {
    fullName: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.STRING, allowNull: false },
    department: { type: DataTypes.STRING, allowNull: false },
    phoneNo: { type: DataTypes.STRING, allowNull: false },
    dateOfBirth: { type: DataTypes.DATE, allowNull: false },
    dateOfJoining: { type: DataTypes.DATE, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    workStatus: { type: DataTypes.STRING, allowNull: false },
    emailId: { type: DataTypes.STRING, allowNull: false },
    qualifications: { type: DataTypes.STRING, allowNull: false },
    profilePicture: { type: DataTypes.STRING, allowNull: true },
});

sequelize.sync({ alter: true }) // Automatically create/update table structure
    .then(() => console.log("Models synced with database"))
    .catch((err) => console.error("Error syncing models:", err));

module.exports = { sequelize, Staff };
