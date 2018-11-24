const User = require('../app/models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

/// creates the user and save it into database
exports.user_create =async function(req, res){
    console.log('control in services.');
    let user = new User(
        {
            username:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
    );

    /// validation to check whether the email already exists.
   var userP = await User.findOne({
        email:req.body.email
    })

    try {
        if(!userP){
            /// encrypt the password 
            var hash =await bcrypt.hash(req.body.password, bcrypt.genSaltSync(10), null,async function (err, hash){
                 if(err){
                     throw err
                 }
                 else{
                     user.password = hash;
                 }
                 
                 try {
                     /// create document in the database
                   let rData = await User.create(user);
                    res.send({status:rData.email + ' registered'})
                 } catch (error) {
                    res.send('error '+err);
                 }
             })
         }
         else{
           res.json({error : 'user already exists: '});
         }
          
    } catch (error) {
        res.send('error '+error);
    }
        
        
}

/// user login
exports.user_login = async function(req, res){
    /// finds a email if present 
   var userDetails = await User.findOne(
        {
            email:req.body.email
        }
    )
try {
    if(userDetails){
        /// compares the password enter by the user and which are present in the document for respective user which is encrypted
        if(bcrypt.compareSync(req.body.password, userDetails.password)){
            const payload = {
                _id:userDetails._id,
                email:userDetails.email
            }
            /// token is generated using json web token
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn:1440
            })
            res.send(token);
        }
        else{
            res.send({error:"user does not exist!"});
        }
    }
    else{
        res.send({error:"user does not exist!"})
    }
} catch (error) {
    res.send(error);
}
    
}
