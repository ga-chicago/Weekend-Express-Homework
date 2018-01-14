const express = require('express');
const router = express.Router();
const Car = require('../models/cars.js')

router.get('/', (req,res)=>{
  // search the database
  Car.find({}, (err, allCars)=>{
    if(err)console.log(err);
    // console.log(allCars);
    res.render('index.ejs', {cars: allCars});
  });
});



router.get('/new', (req,res)=>{
  res.render('../views/new.ejs');
});

router.post('/', (req,res)=>{
  Car.create(req.body, (err, createdCar)=>{
  // res.send(createdCar);
  console.error(err);
  res.redirect('/cars');
  });
});

module.exports = router;