const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// DB (need to require database)
require('./db/db.js');


// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));


// CONTROLLER
const WhoController = require('./controllers/whoController.js');
app.use('/whovians', WhoController);


// LISTENER
app.listen(3000, () => {
	console.log('Server is listening on port 3000')
});