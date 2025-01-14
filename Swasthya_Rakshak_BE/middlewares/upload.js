const multer = require('multer');
const path = require('path');

// Set storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store in 'uploads' folder
  },
  filename: (req, file, cb) => {
    // Save file with unique timestamp to avoid name collision
    cb(null, Date.now() + path.extname(file.originalname));
  }
});




// File validation (Optional: Allow only image files)
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true); // Allow image file
  } else {
    cb(new Error('Only image files are allowed!'), false); // Reject non-image file
  }
};

// Initialize multer with configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload;
