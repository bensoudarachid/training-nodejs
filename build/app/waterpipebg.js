'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.jQuery = require('jquery');

require('./waterpipe.js');
(0, _jquery2.default)(document).ready(function () {

<<<<<<< HEAD
    (0, _jquery2.default)('#wavybg-wrapper').waterpipe({
        gradientStart: '#6bc1ff',
        gradientEnd: '#dfefff',
=======
    /*
     * requestAnimationFrame pollyfill
     */

    // var context = document.querySelector('#canvs3').getContext('2d')

    // var color = $('.parampanel').css('background-color')
    (0, _jquery2.default)('#wavybg-wrapper').waterpipe({
        gradientStart: '#6bc1ff',
        // gradientEnd: '#6C7A89',
        // gradientEnd: '#9caab9',
        // gradientEnd: '#bccad9',
        // gradientEnd: '#ffffff',
        gradientEnd: '#dfefff',
        // gradientEnd: '#76ff93', //vert
        // gradientEnd: '#ffffff',


>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        smokeOpacity: 0.05,
        smokeSize: 0.2,
        numCircles: 5,
        maxMaxRad: 150,
        minMaxRad: 1,
        minRadFactor: 0.5,
        iterations: 4,
        drawsPerFrame: 45,
        lineWidth: 1,
        speed: 1,
<<<<<<< HEAD
        bgColorInner: '#6bc1ff',
        bgColorOuter: '#2980b9'
=======
        // bgColorInner: '#c5d3e2',
        bgColorInner: '#6bc1ff',
        // bgColorInner: '#7bd1ff',
        // bgColorOuter: '#003870',
        // bgColorOuter: '#004790',
        // bgColorOuter: '#ffffff'
        bgColorOuter: '#2980b9'
        // bgColorOuter: 'white'
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    });
});