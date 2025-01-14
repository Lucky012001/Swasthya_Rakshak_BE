const { DataTypes } = require('sequelize');
const db = require('../config/appointmentdatabase'); // Assuming you have a Sequelize instance here

const Appointment = db.define('appointment', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preferred_doctor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  appointment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time_slot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reason_for_visit: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Pending',
  },
});

// Sync the table (if necessary)
const syncAppointmentTable = async () => {
  try {
    await Appointment.sync();
    console.log('Appointment table created successfully.');
  } catch (err) {
    console.log('Error syncing Appointment table: ' + err);
  }
};

// Export the Appointment model
module.exports = { Appointment, syncAppointmentTable };
