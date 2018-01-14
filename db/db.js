const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coffee', {
	useMongoClient: true
});

mongoose.connection.once('open', (req, res) => {
	console.log('db connection open');
})

mongoose.connection.on('error', (error) => {
	console.log('mongodb is error', error);
})