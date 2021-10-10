var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faqSchema = new Schema({
 
  question:      { type: String, default: "" },
  answer:  { type:String},
  createdAt : { type: String, default: +new Date() },
  updatedAt : { type: String, default: +new Date() }
});
const  faqs = mongoose.model('faqs', faqSchema);
module.exports = { faqs,faqSchema } ;