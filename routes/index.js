
const courses = require('./courses'),
faq = require('./faq');




var all = [].concat(
    faq,courses
);
module.exports = { all }