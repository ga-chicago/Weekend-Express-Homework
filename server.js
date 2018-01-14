const express = require('express');
const app = express();

//database
require('./db/db.js');







//models
const Coffee = require('./models/coffee.js');



app.get('/coffee', (req, res) => {
	res.send('cofvefe');
})


app.listen(3000, () => {
	console.log('now listening on port 3000');
})