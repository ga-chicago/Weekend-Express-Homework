const mongoose = require('mongoose');

//DB
mongoose.connect('mongodb://localhost:27017/unicorns', {useMongoClient: true});
//check our db

mongoose.connection.once('open', () =>{
    console.log("connected to mongo")
});

mongoose.connection.on('connected', () =>{
    console.log('mongodb is indeed connected')
});
mongoose.connection.on('disconnected', () =>{
    console.log('mongodb is disconnected')
});

mongoose.connection.on('error', (error) =>{
    console.log('there was an error connecting', error)
});