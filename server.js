const express = require('express');
const app = express();

//database
require('./db/db.js');







//models & controllers
const Coffee = require('./models/coffee.js');

const CoffeeController = require('./controllers/coffeeController.js');

app.use('/coffee', CoffeeController);


app.listen(3000, () => {
	console.log('now listening on port 3000');
})