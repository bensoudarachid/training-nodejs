'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiImmutable = require('chai-immutable');

var _chaiImmutable2 = _interopRequireDefault(_chaiImmutable);

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import '../../node_modules/material-design-lite/dist/material.css';
// require('babel-core/register');
require('../../node_modules/babel-polyfill/dist/polyfill.js');

var doc = _jsdom2.default.jsdom('<!doctype html><html><body></body></html>');
var win = doc.defaultView;

global.document = doc;
global.window = win;
//in order to be able to use enzyme.mount to perform full rendering, we need the global window.componentHandler to be present. 
//Thats why we have to import material.js after variable window has been created
require('../../node_modules/material-design-lite/dist/material.js');

// console.log('win.componentHandler='+require('util').inspect(win.componentHandler, false, null))


Object.keys(window).forEach(function (key) {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

_chai2.default.use(_chaiImmutable2.default);