const userService = require('../services/User.service');

/// call a service layer to create document for new user
/**
 * @param  {} req
 * @param  {} res
 */
exports.user_create = function(req, res){
   userService.user_create(req, res);
}

/// call a service to login user
/**
 * @param  {} req
 * @param  {} res
 */
exports.user_login = function(req, res){
    userService.user_login(req, res);
}