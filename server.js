const express = require('express');
const app = express();


// CONTROLLER
const whoController = require('./controllers/whoController.js');


// LISTENER
app.listen(3000, () => {
	console.log('Server is listening on port 3000')
});