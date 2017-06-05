//need npm, node, and mongo
//install mongoose, node-restful, body-parser, nodemon
//Dependcies
var express = require('express');
var mongoose =  require('mongoose'); //wrapper around mongo DB
var bodyParser = require('body-parser')

// MongoDB
mongoose.connect('mongodb://localhose/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
ap.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');