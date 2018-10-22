const Joi = require('joi');
const mongoose = require('mongoose');

const promptSchema = new mongoose.prompt({
  phrase: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const prompt = mongoose.model('prompt', translationSchema);

function validatePrompt(prompt) {
  const schema = {
    phrase: Joi.string().min(10).required()
  };

  return Joi.validate(prompt, schema);
}

exports.promptSchema = promptSchema;
exports.Prompt = Prompt; 
exports.validate = validatePrompt;