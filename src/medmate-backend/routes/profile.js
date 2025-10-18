const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
const profileController = require('../controllers/profileController');

const UPLOADS_DIR = process.env.UPLOADS_DIR || 'uploads';
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.round(Math.random()*1e9)}${ext}`);
  }
});
const upload = multer({ storage });

router.get('/', auth, profileController.getProfile);
router.post('/', auth, upload.single('avatar'), profileController.updateProfile);

module.exports = router;
