const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/stepsController');

router.post('/', auth, ctrl.addOrUpdate); // add/update
router.get('/', auth, ctrl.getByDate); // list or by date

module.exports = router;
