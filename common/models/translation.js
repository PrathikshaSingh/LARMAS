'use strict';
//This file is used to validate the specific model
module.exports = function(Translation) {
  translation.validatesLengthOf('content', {min: 5, message: {min: 'transaltion not valid'}});
};
