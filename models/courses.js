var mongoose = require('mongoose');
config = require('../config'),
Schema = mongoose.Schema;

const coursesSchema = new Schema({
 
  title: { type: String, default: "" },
  tagline : { type:String,},
  instructorId: { type:Schema.ObjectId, ref : 'instructors', sparse:true, default:null },
  createdBy : { type: String },
  duration : { type: String },
  cost : { type: String },
  includes:[{
    type: String
          }],
  learning:[{
    type:String
  }],

  createdAt : { type: String, default: +new Date() },
  updatedAt : { type: String, default: +new Date() }

});
const  courses = mongoose.model('courses', coursesSchema);
module.exports = { courses,coursesSchema } ;