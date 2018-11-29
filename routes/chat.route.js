const express = require('express');
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const chat_controller = require('../controllers/chat.controller');

router.use(cors());

process.env.SECRET_KEY = 'secret'; 

/// call the controller to chat controller
router.post('/assistant', chat_controller.chat_singleChat);

/**
 * @param  {} 'multiuser'
 * @param  {} chat_controller.chat_multiChat
 */
/// call the controller for multiuser chat
router.post('/multiuser',chat_controller.chat_multiChat);

/// gets the messages received
router.get('/:id', chat_controller.chat_receiverMessages);
module.exports = router;