const Joi = require('joi');
const mongoose = require('mongoose');

const annotationSchema = new mongoose.annotation({
  phrase: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const annotation = mongoose.model('annotation', annotationSchema);

function validateannotation(annotation) {
  const schema = {
    phrase: Joi.string().min(10).required()
  };

  return Joi.validate(annotation, schema);
}

exports.annotationSchema = annotationSchema;
exports.annotation = annotation; 
exports.validate = validateannotation;