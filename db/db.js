const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:/27017', {useMongoClient: true});

mongoose.connection.once('open', ()=>{
  console.log("Connected to our db");
});

mongoose.connection.on('connected', ()=>{
  console.log("Connected to mongo db");
});

mongoose.connection.on('disconnected', ()=>{
  console.log("disconnected from mongo db");
});

mongoose.connection.on('error', (error)=>{
  console.log("error connecting", error);
});