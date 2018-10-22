//packages needed
const mongoose = require('mongoose');
const Joi = require('joi');

//defining schema
const language = mongoose.model('language', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 50
  }
}));

//validating data taken in
function validatelanguage(language) {
  const schema = {
    name: Joi.string().min(10).max(50).required(),
  };

  return Joi.validate(language, schema);
}

//exporting model to be used by index.js and routers.js
exports.language = language; 
exports.validate = validatelanguage;