const Joi = require('joi');
const mongoose = require('mongoose');

const recordingSchema = new mongoose.recording({
  recording: {
    type: Objectid,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const recording = mongoose.model('recording', recordingSchema);

function validaterecording(recording) {
  const schema = {
    phrase: Joi.Objectid().required()
  };

  return Joi.validate(recording, schema);
}

exports.recordingSchema = recordingSchema;
exports.recording= recording; 
exports.validate = validaterecording;