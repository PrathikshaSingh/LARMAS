////Packages required
const Joi = require('joi');
const mongoose = require('mongoose');
//defining schema
const annotationSchema = new mongoose.annotation({
  phrase: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});
//Validation Functions
const annotation = mongoose.model('annotation', annotationSchema);

function validateannotation(annotation) {
  const schema = {
    phrase: Joi.string().min(10).required()
  };

  return Joi.validate(annotation, schema);
}
//exporting schema out to be used by index.js and routes.js
exports.annotationSchema = annotationSchema;
exports.annotation = annotation; 
exports.validate = validateannotation;
