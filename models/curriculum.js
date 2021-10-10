const mongoose = require('mongoose'),
config = require('../config'),
Schema = mongoose.Schema;

const curriculumSchema = new Schema({
 
  videos:[{
    type: String
            }],
    courseId:    { type: Schema.ObjectId, ref : 'courses',     sparse:true, default: null},

});



const  curriculum = mongoose.model('curriculum', curriculumSchema);
module.exports = { curriculum,curriculumSchema } ;