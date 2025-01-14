// // /routes/doctor.routes.js
// const express = require('express');
// const router = express.Router();
// const doctorController = require('../controllers/doctor');

// // Route to create a new doctor
// router.post('/', doctorController.createDoctor);

// // Route to get all doctors
// router.get('/', doctorController.getAllDoctors);

// // Route to get a specific doctor by ID
// router.get('/:id', doctorController.getDoctorById);

// // Route to update doctor details
// router.put('/:id', doctorController.updateDoctor);

// // Route to delete a doctor
// router.delete('/:id', doctorController.deleteDoctor);

// module.exports = router;










const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor');

// Use the upload middleware directly
router.post('/', doctorController.upload.single('profile_picture'), doctorController.createDoctor);
router.put('/:id', doctorController.upload.single('profile_picture'), doctorController.updateDoctor);

// Other routes remain unchanged
router.get('/', doctorController.getAllDoctors);
router.get('/:id', doctorController.getDoctorById);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
