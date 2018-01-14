const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make:{type:String, require:true},
  model:{type:String, require:true},
  year:{type:Date, require:true},
  color:{type:String, required:true}
});

// create the model
const Car = mongoose.model('Car', carSchema);

// export
module.exports = Car;
