//packages needed
const Joi = require('joi');
const mongoose = require('mongoose');
//defining schema
const recordingSchema = new mongoose.recording({
  recording: {
    type: Objectid,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});
//validating data taken in
const recording = mongoose.model('recording', recordingSchema);

function validaterecording(recording) {
  const schema = {
    phrase: Joi.Objectid().required()
  };

  return Joi.validate(recording, schema);
}
//exporting model to be used by index.js and routers.js
exports.recordingSchema = recordingSchema;
exports.recording= recording; 
exports.validate = validaterecording;
