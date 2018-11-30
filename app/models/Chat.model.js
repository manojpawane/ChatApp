const mongoose = require('mongoose');
const Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;
let ChatSchema = new Schema(
    {
        senderId:{
            type:ObjectId,
            required:true
        },

        receiverId:{
            type:ObjectId,
            required:true
        },
        message:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model('Chat',ChatSchema);