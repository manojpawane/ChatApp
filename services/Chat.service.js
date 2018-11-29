exports.chat_singleChat = function(req, res){
    let question = req.body.question;
    if(question === 'hi'){
        res.send('Hi ' + req.body.name);
    }
    else if(question === 'date'){
        var d = new Date();
        res.send(d);
    }
    else if(question === 'what is computer'){
         res.send('A computer is a machine or device that performs processes, calculations and operations.')
    }
    else if(question === 'what is internet'){
        res.send('a global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.');
    }
    else{
        res.send('Sorry, please i am not upto')
    }
}