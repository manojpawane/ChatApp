const userService = require('../services/User.service');

/// call a service layer to create document for new user
exports.user_create = function(req, res){
   userService.user_create(req, res);
}

/// call a service to login user
exports.user_login = function(req, res){
    userService.user_login(req, res);
}