'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRouter = require('react-router');

var _rootreducer = require('./rootreducer');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _todoactions = require('./todos/todoactions');

var _todoactions2 = _interopRequireDefault(_todoactions);

var _trainingactions = require('./trainings/trainingactions');

var _trainingactions2 = _interopRequireDefault(_trainingactions);

var _authservices = require('./app/authentication/authservices');

var _authservices2 = _interopRequireDefault(_authservices);

var _todoservices = require('./todos/todoservices');

var _todoservices2 = _interopRequireDefault(_todoservices);

var _trainingservices = require('./trainings/trainingservices');

var _trainingservices2 = _interopRequireDefault(_trainingservices);

var _authactions = require('./app/authentication/authactions');

var _authactions2 = _interopRequireDefault(_authactions);

var _appactions = require('./app/appactions');

var _appactions2 = _interopRequireDefault(_appactions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;

// JSON.dateParser= function(key, value) {
//     console.log('JSON test reviver ky=' + require('util').inspect(key, false, null) + ', value=' + require('util').inspect(value, false, null))
//     // if (key == 'start' || key == 'end') {
//     //     // console.log('reviver key=' + require('util').inspect(key, false, null))
//     //     // console.log('reviver value=' + require('util').inspect(value, false, null))
//     //     return new Date(value)
//     // } else {
//     //     return value
//     // }
//
//     if (typeof value === "string" && dateFormat.test(value)) {
//         console.log('JSON reviver key='+require('util').inspect(key, false, null))
//         console.log('JSON reviver value='+require('util').inspect(value, false, null))
//
//         return new Date(value)
//     }
//     return value
// }
//
// JSON.parseWithDate = function(json) {
//     /// <summary>
//     /// Wrapper around the JSON.parse() function that adds a date
//     /// filtering extension. Returns all dates as real JavaScript dates.
//     /// </summary>
//     /// <param name="json" type="string">JSON to be parsed</param>
//     /// <returns type="any">parsed value or object</returns>
//     var parse = JSON._parseSaved ? JSON._parseSaved : JSON.parse;
//     try {
//         var res = parse(json, JSON.dateParser);
//         return res;
//     } catch (e) {
//         // orignal error thrown has no error message so rethrow with message
//         throw new Error("JSON content could not be parsed");
//     }
// }
//
// JSON.useDateParser = function(reset) {
//     /// <summary>
//     /// Globally enables JSON date parsing for JSON.parse().
//     /// replaces the default JSON parser with parse plus dateParser extension
//     /// </summary>
//     /// <param name="reset" type="bool">when set restores the original JSON.parse() function</param>
//
//     // if any parameter is passed reset
//     if (typeof reset != "undefined") {
//         if (JSON._parseSaved) {
//             JSON.parse = JSON._parseSaved;
//             JSON._parseSaved = null;
//         }
//     } else {
//         if (!JSON.parseSaved) {
//             JSON._parseSaved = JSON.parse;
//             JSON.parse = JSON.parseWithDate;
//         }
//     }
// }

var actions = _extends({}, _authservices2.default, _todoservices2.default, _trainingservices2.default, _appactions2.default, _authactions2.default, _todoactions2.default, _trainingactions2.default);

// JSON.useDateParser()

exports.default = actions;