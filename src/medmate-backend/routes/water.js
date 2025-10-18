const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/waterController');

router.post('/', auth, ctrl.addOrUpdate);
router.get('/', auth, ctrl.getByDate);

module.exports = router;
