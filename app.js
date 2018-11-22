const expres = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.route');

/// initialize our express app
const app = express();

/// set up mongoose connection
let dev_db_url =  'mongodb://admin:admin123@ds043457.mlab.com:43457/productapp'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/// parse the incoming request bodies in middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user', user);

let port = 1235;
/// dedicating the port number 1235 and telling express app to listen to that port
app.listen(port, ()=>{
    console.log('Port is up and running on port number '+port);
})

  