require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const stepsRoutes = require('./routes/steps');
const waterRoutes = require('./routes/water');
const medicineRoutes = require('./routes/medicine');
const labReportsRoutes = require('./routes/labreports');

const app = express();

// env
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/medmate';
const UPLOADS_DIR = process.env.UPLOADS_DIR || 'uploads';

// connect db
connectDB(MONGODB_URI);

// create uploads dir if missing
const fs = require('fs');
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

// middlewares
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// serve uploaded files statically (for dev)
app.use('/uploads', express.static(path.join(__dirname, UPLOADS_DIR)));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/steps', stepsRoutes);
app.use('/api/water', waterRoutes);
app.use('/api/medicine', medicineRoutes);
app.use('/api/labreports', labReportsRoutes);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
