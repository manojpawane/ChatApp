const express = require('express');
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const chat_controller = require('../controllers/chat.controller');

router.use(cors());

process.env.SECRET_KEY = 'secret'; 

/// call the controller to chat controller
router.post('/assistant', chat_controller.chat_singleChat);

module.exports = router;