'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.jQuery = require('jquery');

require('./waterpipe.js');
(0, _jquery2.default)(document).ready(function () {

    (0, _jquery2.default)('#wavybg-wrapper').waterpipe({
        gradientStart: '#6bc1ff',
        gradientEnd: '#dfefff',
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
        bgColorInner: '#6bc1ff',
        bgColorOuter: '#2980b9'
    });
});