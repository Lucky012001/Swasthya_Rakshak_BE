const Patient = require('../models/patient');
const upload = require('../middlewares/upload');  // Multer middleware

// Create Patient
exports.createPatient = async (req, res) => {
  try {
    // Handle file upload if exists
    const data = req.body;
    data.profile_picture = req.file ? req.file.filename : null; // File upload handling

    // Create a new patient
    const patient = await Patient.create(data);
    res.status(201).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json({ success: true, data: patients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Patient
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Patient
exports.updatePatient = async (req, res) => {
  try {
    const data = req.body;
    // Handle file upload if exists
    if (req.file) {
      data.profile_picture = req.file.filename; // Update profile picture if uploaded
    }

    // Update patient in the database
    const updatedPatient = await Patient.update(data, { where: { patient_id: req.params.id } });
    res.status(200).json({ success: true, data: updatedPatient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Patient
exports.deletePatient = async (req, res) => {
  try {
    await Patient.destroy({ where: { patient_id: req.params.id } });
    res.status(200).json({ success: true, message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

