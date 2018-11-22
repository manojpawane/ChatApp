const expres = require('express');
const bodyParser = require('body-parser');

/// initialize our express app
const app = express();

let port = 1235;

/// dedicating the port number 1235 and telling express app to listen to that port
app.listen(port, ()=>{
    console.log('Port is up and running on port number '+port);
})

  