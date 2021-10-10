const mongoose = require('mongoose'),
config = require('../config'),
Schema = mongoose.Schema;

const instructorsSchema = new Schema({
 
  name:      { type: String, default: "" },
  image:   {type:String,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsBpPf3Z8YQk5saBz5Fcg2N6urKnCux0wEA&usqp=CAU"},
  about:{type:String},
  createdAt : { type: String, default: +new Date() },
  updatedAt : { type: String, default: +new Date() }
});
const  instructors = mongoose.model('instructors', instructorsSchema);
module.exports = { instructors,instructorsSchema } ;