const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
const controller = require('../controllers/labReportsController');

const UPLOADS_DIR = process.env.UPLOADS_DIR || 'uploads';
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.round(Math.random()*1e9)}${ext}`);
  }
});
const upload = multer({ storage });

router.post('/upload', auth, upload.single('file'), controller.upload);
router.get('/', auth, controller.list);
router.get('/:id/download', auth, controller.download);
router.delete('/:id', auth, controller.remove);

module.exports = router;
