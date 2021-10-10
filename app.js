const express = require('express'),
 bodyParser = require('body-parser'),
 cors = require('cors'),
 mongoose = require('mongoose'),
 config = require('./config'),
 Routes = require('./routes')





// Db Connection

mongoose
.connect(config.dbConfig.dbURI, {
useUnifiedTopology: true,
useCreateIndex: true,
useNewUrlParser: true,
})
.then(() =>console.log('DB Connected!'))
.catch(err => {
console.log(err);
});


const app = express();

var fs = require('fs');




app.use(cors());
app.use(bodyParser.json({limit:'3mb',extended:true}));
app.use(bodyParser.urlencoded({ extended: false }));




// Routing 

app.get('/', (req, res) => res.send('Hello World!'))


app.use(Routes.all);




module.exports = app;