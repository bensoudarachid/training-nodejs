'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var userReducer = function userReducer() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'CREATE_USER_ID':
      return {
        username: user.username,
        id: action.id
      };
    default:
      return user;
  }
};

exports.default = userReducer;