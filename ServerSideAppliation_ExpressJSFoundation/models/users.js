const Joi = require('joi');
const mongoose = require('mongoose');


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

function validateuser(user) {
  const schema = {
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().required(),
    password: Joi.string().min(0).required(),
    language: Joi.string().min(0).required()
  };

  return Joi.validate(user, schema);
}

exports.user = user; 
exports.validate = validateuser;