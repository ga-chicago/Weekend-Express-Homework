const express = require('express');
const app = express();

require('./db/db.js')




const CarController = require('./controller/carController');
// every path in the controller file will now start with cars
app.use('/cars', CarController);


app.listen(3000, ()=>{
  console.log("Server listening on port 3000");
});