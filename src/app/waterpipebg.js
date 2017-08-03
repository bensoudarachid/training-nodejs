import 'jquery'
// import Stats from 'stats-js'
import $ from 'jquery'


global.jQuery = require('jquery')


// require('./appcomponent.scss')
require('./waterpipe.js')

$(document).ready(function () {



    /*
     * requestAnimationFrame pollyfill
     */

    // var context = document.querySelector('#canvs3').getContext('2d')

    // var color = $('.parampanel').css('background-color')
    $('#wavybg-wrapper').waterpipe({
        gradientStart: '#6bc1ff',
        // gradientEnd: '#6C7A89',
        // gradientEnd: '#9caab9',
        // gradientEnd: '#bccad9',
        // gradientEnd: '#ffffff',
        gradientEnd: '#dfefff',
        // gradientEnd: '#76ff93', //vert
        // gradientEnd: '#ffffff',


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
        // bgColorInner: '#c5d3e2',
        bgColorInner: '#6bc1ff',
        // bgColorInner: '#7bd1ff',
        // bgColorOuter: '#003870',
        // bgColorOuter: '#004790',
        // bgColorOuter: '#ffffff'
        bgColorOuter: '#2980b9'
        // bgColorOuter: 'white'
    })

})



