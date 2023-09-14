const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/getAllUser', userController.getAllUser);

module.exports = router;