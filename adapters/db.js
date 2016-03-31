'use strict';

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', (err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to Mongo')
  }
});

module.exports = {
  mongoose: mongoose
};