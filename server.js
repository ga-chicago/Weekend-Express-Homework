const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


//database
require('./db/db.js');


//middleware
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'))

app.use(express.static('public'))


//models & controllers
const Coffee = require('./models/coffee.js');

const CoffeeController = require('./controllers/coffeeController.js');

app.use('/coffee', CoffeeController);




app.listen(3000, () => {
	console.log('now listening on port 3000');
});