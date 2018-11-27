const chatService = require('../services/Chat.service');

/// call a service layer to create document for new user
/**
 * @param  {} req
 * @param  {} res
 */
exports.chat_singleChat = function(req, res){
   chatService.chat_singleChat(req, res);
}