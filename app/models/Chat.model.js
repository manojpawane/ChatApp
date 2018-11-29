const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatSchema = new Schema(
    {
        senderId:{
            type:String,
            required:true
        },

        receiverId:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        }
    }
)
userSchema.virtual('email').get(function() {
    return this._id;
});


module.exports = mongoose.model('Chat',ChatSchema);