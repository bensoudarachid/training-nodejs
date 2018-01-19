import 'jquery'
import $ from 'jquery'

global.jQuery = require('jquery')

require('./waterpipe.js')
$(document).ready(function () {

<<<<<<< HEAD


    /*
<<<<<<< HEAD
    * requestAnimationFrame pollyfill
    */
=======
     * requestAnimationFrame pollyfill
     */
>>>>>>> 6e3ff02... webstorm big changes crash

    // var context = document.querySelector('#canvs3').getContext('2d')

    // var color = $('.parampanel').css('background-color')
=======
>>>>>>> b06ef94... clean code, remove comments
    $('#wavybg-wrapper').waterpipe({
        gradientStart: '#6bc1ff',
        gradientEnd: '#dfefff',
<<<<<<< HEAD
        // gradientEnd: '#76ff93', //vert
<<<<<<< HEAD
        // gradientEnd: '#ffffff', 
=======
        // gradientEnd: '#ffffff',
>>>>>>> 6e3ff02... webstorm big changes crash


=======
>>>>>>> b06ef94... clean code, remove comments
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



