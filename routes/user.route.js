const express = require('express');
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const user_controller = require('../controllers/user.controller');
const User = require('../app/models/user.model');

router.use(cors());

process.env.SECRET_KEY = 'secret'; 

/// call the controller to create a new document for user
router.post('/create', user_controller.user_create);

/// call the controller to login user
router.post('/login', user_controller.user_login);

module.exports = router;