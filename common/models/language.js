'use strict';
//This file is used to validate model types
module.exports = function(Language) {

    Language.validatesLengthOf('content', {min: 3, message: {min: 'language not valid'}});
};

