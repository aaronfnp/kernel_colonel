<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/loadLB', usersCtrl.loadLB);

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.put('/:userId/update-score', usersCtrl.updateScore);

module.exports = router;

=======
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/loadLB', usersCtrl.loadLB);

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.put('/:userId/update-score', usersCtrl.updateScore);
router.put('/:userId/update-info', usersCtrl.updateInfo);


module.exports = router;

>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
