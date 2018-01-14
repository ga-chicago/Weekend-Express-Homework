const express = require('express');
const app = express();
const bodyParser = require('body-parser')

require('./db/db.js')


// middleware
app.use(bodyParser.urlencoded({extended:true}))


const CarController = require('./controller/carController');
// every path in the controller file will now start with cars
app.use('/cars', CarController);


app.listen(3000, ()=>{
  console.log("Server listening on port 3000");
});