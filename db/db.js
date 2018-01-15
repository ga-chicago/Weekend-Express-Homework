const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost:27017/whovians', { useMongoClient: true });

// check the database for
// connection being open
mongoose.connection.once('open', () => {
	console.log('Connected to Mongo');
});

// connection
mongoose.connection.on('connected', () => {
	console.log('MongoDB is connected');
});

// disconnection
mongoose.connection.on('disconnnected', () => {
	console.log('MongoDB is disconnnected');
});

// error
mongoose.connection.on('error', (error) => {
	console.log('There was an error in the connection:', error);
});
