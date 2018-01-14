const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Init database
require('./db/db.js');

// Middleware
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/', (req, res) => {
  res.redirect('/movies');
});

const MoviesController = require('./controllers/movieController');
app.use('/movies/', MoviesController);

app.listen(4200, ()=>{
	console.log('listening on port 4200');
});