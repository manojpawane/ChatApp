const Chat = require('../app/models/Chat.model');
const User = require('../app/models/user.model');

exports.chat_singleChat = function (req, res) {
    let question = req.body.question;
    if (question === 'hi') {
        res.send('Hi ' + req.body.name);
    }
    else if (question === 'date') {
        var d = new Date();
        res.send(d);
    }
    else if (question === 'what is computer') {
        res.send('A computer is a machine or device that performs processes, calculations and operations.')
    }
    else if (question === 'what is internet') {
        res.send('a global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.');
    }
    else {
        res.send('Sorry, please i am not upto')
    }
}

exports.chat_multiChat = async function (req, res) {
    try {
        var userDetails = await User.findOne({
            email: req.body.receiverEmail
        })

        if (userDetails) {
            var chat = new Chat(
                {
                    senderId: req.body.senderId,
                    receiverId: userDetails._id,
                    message: req.body.message
                }
            )
            let messageSent = await Chat.create(chat);
            if (messageSent) {
                res.send('Sent');
            }
            else {
                res.send('failed to send');
            }

        }
        else {
            res.send('Invalid user');
        }
    } catch (error) {
        res.send(error)
    }

}

exports.chat_receiverMessages = async function (req, res) {
    try {
        var chats = await Chat.find({
            receiverId: req.params.id
        })
        if (chats === undefined || chats.length == 0) {
            res.send('No messages');
        }
        else {
            var message = chats[chats.length - 1];
            var sender = await User.findById({
                _id: message.senderId
            })
            res.send(sender.username + ':' + message.message);
        }
    } catch (error) {
        res.send(error)
    }
}