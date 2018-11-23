const express = require('express');
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");

const user_controller = require('../controllers/user.controller');
const User = require('../models/User');
router.use(cors());

process.env.SECRET_KEY = 'secret'; 

router.post('/create', user_controller.user_create);
module.exports = router;