exports.chat_singleChat = function(req, res){
    let question = req.body.question;
    if(question === 'hi'){
        res.send('Hi ' + req.body.name);
    }
    else if(question === 'date'){
        var d = new Date();
        res.send(d);
    }
    else{
        res.send('Sorry, please i am not upto')
    }
}