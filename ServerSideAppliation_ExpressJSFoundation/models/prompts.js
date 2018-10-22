//Packages required
const Joi = require('joi');
const mongoose = require('mongoose');
//defining schema
const promptSchema = new mongoose.prompt({
  phrase: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});
//Validation Functions
const prompt = mongoose.model('prompt', translationSchema);

function validatePrompt(prompt) {
  const schema = {
    phrase: Joi.string().min(10).required()
  };

  return Joi.validate(prompt, schema);
}
//exporting schema out to be used by index.js and routes.js
exports.promptSchema = promptSchema;
exports.Prompt = Prompt; 
exports.validate = validatePrompt;
