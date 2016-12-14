'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var appactions = {
  appError: function appError(error) {
    return {
      type: 'APP_ERROR',
      error: error
    };
  }
};

exports.default = appactions;