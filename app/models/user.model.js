const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * @param  {} email
 */
var validateEmail = function(email){
    var re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

/// declaring schema for user
let UserSchema = new Schema(
    {
        username:{
                  type:String,
                  required:true, 
                  max:100 
                },
        email:{
               type:String, 
               Required:'Email address cannot be blank. ',
               validate:[validateEmail, 'Please fill valid email address. '],
               match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
               index: {unique: true, dropDups: true}
            },
        password:{type:String, required:[true, 'Password cannot be left blank. ']}
    }
)

/// Export the model
module.exports = mongoose.model('User', UserSchema);