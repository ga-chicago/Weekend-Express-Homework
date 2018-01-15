const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// DB (need to require database)
require('./db/db.js');


// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));


// CONTROLLER
const WhoController = require('./controllers/whoController.js');
app.use('/whovians', WhoController);


// LISTENER
app.listen(3000, () => {
	console.log('Server is listening on port 3000')
});