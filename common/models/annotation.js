'use strict';
//This file is used to validate models

module.exports = function(Annotation) {
  
  annoation.validatesLengthOf('content', {min: 3, message: {min: 'annoation not valid'}});
};
