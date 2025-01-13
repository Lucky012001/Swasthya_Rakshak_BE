const express = require("express");
const multer = require("multer");
const path = require("path");
const { createStaff, getAllStaff } = require("../controllers/staffController");

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("profilePicture"), createStaff);
router.get("/", getAllStaff);

module.exports = router;
