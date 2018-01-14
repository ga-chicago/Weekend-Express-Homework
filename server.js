const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override');

require('./db/db.js')


// middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))


const CarController = require('./controller/carController');
// every path in the controller file will now start with cars
app.use('/cars', CarController);


app.listen(3000, ()=>{
  console.log("Server listening on port 3000");
});