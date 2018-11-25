var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 5000
var user = require('./routes/user.route');

/// database settings for mongo DB
const mongoURI = 'mongodb://admin:admin123@ds043457.mlab.com:43457/productapp';
mongoose.connect(mongoURI,{useNewUrlParser:true})
.then(()=> console.log("MongoDB connected."))
.catch(err => console.log(err))

app.use(bodyParser.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

/// routing call for user registration and login
app.use('/user', user);

/// prints the port number once connected to server
app.listen(port, ()=>{
    console.log('App is running at the port: '+port);
})
