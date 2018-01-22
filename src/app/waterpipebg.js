import 'jquery'
import $ from 'jquery'

global.jQuery = require('jquery')

require('./waterpipe.js')
$(document).ready(function () {

    $('#wavybg-wrapper').waterpipe({
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
    })
})



