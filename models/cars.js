const mongoose = require('mongoose');

// this is the new shcema that specifies what fields be filled out, what data types they are and if they are required
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
