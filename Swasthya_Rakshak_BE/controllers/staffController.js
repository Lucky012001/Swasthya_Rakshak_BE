const { Staff } = require("../models/staff");

// Add a new staff member
exports.createStaff = async (req, res) => {
    try {
        const { fullName, position, department, phoneNo, dateOfBirth, dateOfJoining, gender, workStatus, emailId,qualifications } = req.body;
        const profilePicture = req.file ? req.file.path : null;

        const newStaff = await Staff.create({
            fullName,
            position,
            department,
            phoneNo,
            dateOfBirth,
            dateOfJoining,
            gender,
            workStatus,
            emailId,
            profilePicture,
            qualifications,
        });

        res.status(201).json(newStaff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all staff members
exports.getAllStaff = async (req, res) => {
    try {
        const staffMembers = await Staff.findAll();
        res.status(200).json(staffMembers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
