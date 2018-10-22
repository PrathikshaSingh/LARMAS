'use strict';
//This file is used to validaet models
module.exports = function(Prompt) {
  prompt.validatesLengthOf('content', {min: 10, message: {min: 'prompt not valid'}});
};
