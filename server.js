// port on which this homework's server will run
const port = 3000;
// import the express framwork
const express = require('express');
// make smaller name for importing express methods
const app = express();
//run a database message file
//require('./db/db.js')
// import bodyParser
const bodyParser = require('body-parser');
// import method override
const methodOverride = require('method-override')
//  implement body parser to use req.body later
app.use(bodyParser.urlencoded({
	extended: true
}))
// middleware that uses method-override module to make up for things not allowed in HTML5
app.use(methodOverride('_method'));
// middleware that uses express.static to share 
app.use(express.static('public'))

// import Criminals controller
const CriminalsController = require('./controllers/criminalsController.js')

// use Criminals controller

app.use('/criminals/', CriminalsController);













app.listen(port, ()=>{
	console.log("This here server is up and runnin' for the weekend server homework, hmmmm... on port: " +port); 
});