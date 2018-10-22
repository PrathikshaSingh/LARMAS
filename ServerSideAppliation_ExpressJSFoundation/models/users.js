//Packages Required
const Joi = require('joi');
const mongoose = require('mongoose');

//defining schema
const users = mongoose.model('users', new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  email:{
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  emailVerified:{
    type: Boolean,
    default: false
  },
  password:{
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  language:{
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  }
}));
//validating data
function validateuser(user) {
  const schema = {
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().required(),
    password: Joi.string().min(0).required(),
    language: Joi.string().min(0).required()
  };

  return Joi.validate(user, schema);
}
//exporting users to be used by index.js and routers
exports.user = user; 
exports.validate = validateuser;
