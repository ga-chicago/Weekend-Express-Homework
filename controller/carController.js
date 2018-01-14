const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.send('pathworking');
});

router.get('/new', (req,res)=>{
  res.render('../views/new.ejs');
});



module.exports = router;