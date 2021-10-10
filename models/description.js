const mongoose = require('mongoose'),
Schema = mongoose.Schema,
config = require('../config');





const descriptionSchema = new Schema({
 
  description:      { type: String, default: "" },
  courseId:    { type: Schema.ObjectId, ref : 'courses',     sparse:true, default: null},
  
  elements:[{
    type: String
          }],
  topics:[{
    type: String
            }],
  descriptionMetaDetail:{type:String},
  createdAt : { type: String, default: +new Date() },
  updatedAt : { type: String, default: +new Date() }
});
const  description = mongoose.model('description', descriptionSchema);
module.exports = { description,descriptionSchema } ;