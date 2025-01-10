// const express = require('express');
// const sequelize = require('./config/database');
// const authRoutes = require('./routes/authRoutes');
// const doctorRoutes = require('./routes/doctor');
// const patientRoutes = require('./routes/patientRoutes');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/doctors', doctorRoutes);
// app.use('/api', patientRoutes);

// // Sync Database and Start Server for Auth and Patient Routes
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Database connected');
//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`Server is running on port ${process.env.PORT || 3000}`);
//     });
//   })
//   .catch(err => {
//     console.error('Database connection failed:', err);
//     process.exit(1); // Exit the process in case of a failed DB connection
//   });

// // Sync Database and Start Server for Doctor Routes
// const doctorApp = express();

// // Middleware for Doctor App
// doctorApp.use(express.json());
// doctorApp.use(cors());
// doctorApp.use(bodyParser.json());
// doctorApp.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes for Doctor App
// doctorApp.use('/api/doctors', doctorRoutes);

// doctorApp.listen(3001, () => {
//   console.log('Doctor server is running on port 3001');
// });

// // Sync Database for Patient Routes
// const patientApp = express();

// // Middleware for Patient App
// patientApp.use(cors());
// patientApp.use(bodyParser.json());
// patientApp.use('/uploads', express.static('uploads'));


// // Routes for Patient App
// patientApp.use('/api', patientRoutes);

// // Start Server for Patient App
// const patientPort = process.env.PATIENT_PORT || 5000;
// patientApp.listen(patientPort, () => {
//   console.log(`Patient server running on http://localhost:${patientPort}`);
// });








const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patientRoutes');
const staffRoutes = require('./routes/staffRoutes'); // Import staff routes
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api', patientRoutes);
app.use('/api/staff', staffRoutes); // Add staff routes

// Sync Database and Start the Server for All Routes
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connected');
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit the process in case of a failed DB connection
  });

// Doctor Server (Optional, if needed in a separate process)
const doctorApp = express();

// Middleware for Doctor App
doctorApp.use(express.json());
doctorApp.use(cors());
doctorApp.use(bodyParser.json());
doctorApp.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes for Doctor App
doctorApp.use('/api/doctors', doctorRoutes);

doctorApp.listen(3001, () => {
  console.log('Doctor server is running on port 3001');
});

// Patient Server (Optional, if needed in a separate process)
const patientApp = express();

// Middleware for Patient App
patientApp.use(cors());
patientApp.use(bodyParser.json());
patientApp.use('/uploads', express.static('uploads'));

// Routes for Patient App
patientApp.use('/api', patientRoutes);

// Start Server for Patient App
const patientPort = process.env.PATIENT_PORT || 5000;
patientApp.listen(patientPort, () => {
  console.log(`Patient server running on http://localhost:${patientPort}`);
});








// const express = require("express");
// const bodyParser = require("body-parser");
// const staffRoutes = require("./routes/staffRoutes");

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use("/uploads", express.static("uploads")); // Serve uploaded profile pictures
// app.use("/api/staff", staffRoutes);

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });















// const express = require('express');
// const sequelize = require('./config/database');
// const authRoutes = require('./routes/authRoutes');
// const doctorRoutes = require('./routes/doctor');
// const patientRoutes = require('./routes/patientRoutes');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/doctors', doctorRoutes);
// app.use('/api', patientRoutes);

// // Sync Database and Start Server for Auth and Patient Routes
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Database connected');
//     const port = process.env.PORT || 3000;
//     const host = '192.168.46.246';  // Replace with your server's LAN IP address
//     app.listen(port, host, () => {
//       console.log(`Server is running at http://${host}:${port}`);
//     });
//   })
//   .catch(err => {
//     console.error('Database connection failed:', err);
//     process.exit(1); // Exit the process in case of a failed DB connection
//   });

// // Sync Database and Start Server for Doctor Routes
// const doctorApp = express();

// // Middleware for Doctor App
// doctorApp.use(express.json());
// doctorApp.use(cors());
// doctorApp.use(bodyParser.json());
// doctorApp.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes for Doctor App
// doctorApp.use('/api/doctors', doctorRoutes);

// const doctorPort = 3001;
// doctorApp.listen(doctorPort, '192.168.46.246', () => {  // Replace with your server's LAN IP address
//   console.log(`Doctor server is running on http://192.168.46.246:${doctorPort}`);
// });

// // Sync Database for Patient Routes
// const patientApp = express();

// // Middleware for Patient App
// patientApp.use(cors());
// patientApp.use(bodyParser.json());
// patientApp.use('/uploads', express.static('uploads'));

// // Routes for Patient App
// patientApp.use('/api', patientRoutes);

// // Start Server for Patient App
// const patientPort = process.env.PATIENT_PORT || 5000;
// patientApp.listen(patientPort, '192.168.46.246', () => {  // Replace with your server's LAN IP address
//   console.log(`Patient server running on http://192.168.46.246:${patientPort}`);
// });




















