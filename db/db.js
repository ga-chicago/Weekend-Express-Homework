

const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/', { useMongoClient: true })

mongoose.connection.once('open', ()=>{
	console.log('CONNECTED TO DATABASE')
})


mongoose.connection.on('connected', ()=>{
	console.log('mondodb is connected')
})

mongoose.connection.on('disconnected', ()=>{
	console.log('mondodb is disconnected')
})

mongoose.connection.on('error', ()=>{
	console.log('there was an error connecting', error)
})
