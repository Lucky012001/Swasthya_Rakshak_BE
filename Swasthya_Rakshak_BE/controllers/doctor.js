const Doctor = require('../models/doctor');
const multer = require('multer');
const path = require('path');

// Set up multer for profile picture upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Save to 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Generate unique filename
    }
});

const upload = multer({ storage: storage });

// Export upload middleware so it can be used in the routes
module.exports = {
    upload,  // Make sure this is exported
    createDoctor: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: "Profile picture is required" });
            }

            const { full_name, specialization, qualifications, medical_license_number, years_of_experience, consultation_fees, working_hours, hospital_clinic_address, phone_number, email_address, emergency_contact_number, room_number, profile_status } = req.body;
            const profile_picture = req.file.filename; // File is now saved in 'uploads/'

            const doctor = await Doctor.create({
                full_name,
                specialization,
                qualifications,
                medical_license_number,
                years_of_experience,
                consultation_fees,
                working_hours,
                hospital_clinic_address,
                phone_number,
                email_address,
                profile_picture,  // Save profile picture filename
                emergency_contact_number,
                room_number,
                profile_status
            });

            res.status(201).json({ message: 'Doctor created successfully', doctor });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllDoctors: async (req, res) => {
        try {
            const doctors = await Doctor.findAll();
            res.status(200).json(doctors);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getDoctorById: async (req, res) => {
        try {
            const doctor = await Doctor.findByPk(req.params.id);
            if (!doctor) {
                return res.status(404).json({ message: 'Doctor not found' });
            }
            res.status(200).json(doctor);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateDoctor: async (req, res) => {
        try {
            const doctor = await Doctor.findByPk(req.params.id);
            if (!doctor) {
                return res.status(404).json({ message: 'Doctor not found' });
            }

            if (req.file) {
                req.body.profile_picture = req.file.filename;
            }

            await doctor.update(req.body);
            res.status(200).json({ message: 'Doctor updated successfully', doctor });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteDoctor: async (req, res) => {
        try {
            const doctor = await Doctor.findByPk(req.params.id);
            if (!doctor) {
                return res.status(404).json({ message: 'Doctor not found' });
            }

            await doctor.destroy();
            res.status(200).json({ message: 'Doctor deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};


