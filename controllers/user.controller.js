const User = require('../models/user.model');

/// creates the user and save it into database
exports.user_create = function(req, res){
    let user = new User(
        {
            username:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
    );

    user.save(function(err){
        if(err){
            return next(err);
        }
        console.log('User added succesfully. ');
    })
}