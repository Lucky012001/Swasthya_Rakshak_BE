const { Appointment } = require('../models/appointment');
const nodemailer = require('nodemailer');

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Send email function (for both Email & SMS-like message)
const sendEmail = async (email, subject, message) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Create Appointment
exports.createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);

        // Send email notification (appointment confirmation)
        const mailMessage = `Dear ${appointment.full_name}, your appointment with Dr. ${appointment.preferred_doctor} on ${appointment.appointment_date} at ${appointment.time_slot} has been confirmed.`;

        // Send confirmation to both email and SMS-like (to email address)
        await sendEmail(appointment.email_address, 'Appointment Confirmation', mailMessage);

        res.status(201).json({ message: 'Appointment created and notifications sent', appointment });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ error: 'Failed to create appointment' });
    }
};

// Get All Appointments
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
};

// Get Appointment by ID
exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findByPk(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        console.error('Error fetching appointment:', error);
        res.status(500).json({ error: 'Failed to fetch appointment' });
    }
};

// Update Appointment
exports.updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByPk(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        Object.assign(appointment, req.body);
        await appointment.save();
        res.status(200).json({ message: 'Appointment updated', appointment });
    } catch (error) {
        console.error('Error updating appointment:', error);
        res.status(500).json({ error: 'Failed to update appointment' });
    }
};

// Delete Appointment
exports.deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByPk(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        await appointment.destroy();
        res.status(200).json({ message: 'Appointment deleted' });
    } catch (error) {
        console.error('Error deleting appointment:', error);
        res.status(500).json({ error: 'Failed to delete appointment' });
    }
};
