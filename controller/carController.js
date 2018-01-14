const express = require('express');
const router = express.Router();
const Car = require('../models/cars.js')

router.get('/', (req,res)=>{
  res.render('index.ejs');
});

router.get('/new', (req,res)=>{
  res.render('../views/new.ejs');
});

router.post('/', (req,res)=>{
  Car.create(req.body, (err, createdCar)=>{
  // res.send(createdCar);
  console.error(err);
  res.redirect('localhost:3000/cars');
  });
});

module.exports = router;