const express = require('express');
const router = express.Router();
const upgradesCtrl = require('../../controllers/api/upgrades');

// All paths start with '/api/users'
router.get('/index', upgradesCtrl.index);

module.exports = router;