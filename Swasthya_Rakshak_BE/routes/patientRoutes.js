



const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const upload = require('../middlewares/upload');  // Multer middleware

// Route to create a new patient
router.post('/patients', upload.single('profile_picture'), patientController.createPatient);

// Route to get all patients
router.get('/patients', patientController.getPatients);

// Route to get a single patient by ID
router.get('/patients/:id', patientController.getPatientById);

// Route to update patient details
router.put('/patients/:id', upload.single('profile_picture'), patientController.updatePatient);

// Route to delete a patient
router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;
