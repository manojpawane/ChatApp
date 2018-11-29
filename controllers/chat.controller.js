const chatService = require('../services/Chat.service');

/// call a service layer to create document for new user
/**
 * @param  {} req
 * @param  {} res
 */
exports.chat_singleChat = function(req, res){
   chatService.chat_singleChat(req, res);
}

exports.chat_multiChat = function(req, res){
   chatService.chat_multiChat(req, res);
}

exports.chat_receiverMessages = function(req, res){
   chatService.chat_receiverMessages(req, res);
}