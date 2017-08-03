import 'jquery'
import $ from 'jquery'


global.jQuery = require('jquery')


$(document).ready(function () {

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000)
        })
    }


    (function ($, window) {


        function Constellation(canvas, options) {

            var $canvas = $(canvas),
                context = canvas.getContext('2d'),
                defaults = {
                    star: {
                        // color: 'rgba(172, 186, 201, .99)', //silver
                        // color: 'rgba(34, 167, 240, .99)', //blue
                        color: 'rgba(255, 255, 255, .5)', //white
                        // color: 'rgba(0, 0, 0, .99)', //black
                        // color: 'rgba(108, 122, 137, .99)',
                        width: 100,
                        randomWidth: true
                    },
                    line: {
                        color: 'rgba(255, 0, 0, .9)',
                        width: 0.2
                    },
                    position: {
                        x: 0, // This value will be overwritten at startup
                        y: 0 // This value will be overwritten at startup
                    },
                    width: window.innerWidth,
                    height: window.innerHeight,
                    velocity: 0.5,
                    length: 100,
                    distance: 120,
                    radius: 150,
                    stars: []
                },
                config = $.extend(true, {}, defaults, options)

            canvas.width = canvas.width * 4
            canvas.height = canvas.height * 8

            function Star() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height

                this.vx = (config.velocity - (Math.random() * 0.5))
                this.vy = (config.velocity - (Math.random() * 0.5))

                this.radius = config.star.randomWidth ? (Math.random() * config.star.width) : config.star.width
            }

            Star.prototype = {
                // create: function(){
                //   context.beginPath()
                //   context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                //   context.fill()
                // },

                create: function () {
                    this.drawEllipse(this.x, this.y, 2.5 * this.radius * config.width / window.innerWidth, 2 * this.radius * config.height / window.innerHeight)
                },
                drawEllipse: function (centerX, centerY, width, height) {
                    context.beginPath()

                    context.moveTo(centerX, centerY - height / 2) // A1

                    context.bezierCurveTo(
                        centerX + width / 2, centerY - height / 2, // C1
                        centerX + width / 2, centerY + height / 2, // C2
                        centerX, centerY + height / 2) // A2

                    context.bezierCurveTo(
                        centerX - width / 2, centerY + height / 2, // C3
                        centerX - width / 2, centerY - height / 2, // C4
                        centerX, centerY - height / 2) // A1

                    // context.fillStyle = 'white'
                    context.fill()
                    context.closePath()
                },

                animate: function () {
                    if (this.y < 0 || this.y > canvas.height) {
                        this.vx = this.vx
                        this.vy = -this.vy
                    } else if (this.x < 0 || this.x > canvas.width) {
                        this.vx = -this.vx
                        this.vy = this.vy
                    }

                    this.x += this.vx
                    this.y += this.vy
                },
            }

            this.createStars = function () {
                var length = config.length,
                    star,
                    i

                context.clearRect(0, 0, canvas.width, canvas.height)

                for (i = 0; i < length; i++) {
                    config.stars.push(new Star())
                    // star = config.stars[i]
                }

//          star.line()
            }
            // this.animateText = function () {
            //   // canvas.width(($(window).width()).height($(window).height()))
            //   context.font = '110px Dancing Script'
            //   context.fillStyle = 'white'
            //   context.textAlign = 'center'
            //   context.fillText('JAVA', canvas.width/6, 1.0*canvas.height/3.7)
            // }

            this.animateStars = function () {
                var length = config.length,
                    star,
                    i

                context.clearRect(0, 0, canvas.width, canvas.height)

                for (i = 0; i < length; i++) {
                    star = config.stars[i]
                    star.create()
                    star.animate()
                }

//          star.line()
            }

            this.setCanvas = function () {
                canvas.width = config.width
                canvas.height = config.height
            }

            this.setContext = function () {
                context.fillStyle = config.star.color
                context.strokeStyle = config.line.color
                context.lineWidth = config.line.width
            }

            this.setInitialPosition = function () {
                if (!options || !options.hasOwnProperty('position')) {
                    config.position = {
                        x: canvas.width * 0.5,
                        y: canvas.height * 0.5
                    }
                }
            }

            this.loop = function (callback) {
                callback()

                // setTimeout(
                //   window.requestAnimationFrame(function () {
                //     stats.begin() // Only for Stats
                //     this.loop(callback)
                //     // window.setTimeout(this.loop(callback), 1000 / 20)
                //     stats.end() // Only for Stats
                //   }.bind(this))
                // , 1000 / 10)
                setTimeout(function () {
                    window.requestAnimationFrame(function () {
                        // stats.begin() // Only for Stats
                        this.loop(callback)
                        // window.setTimeout(this.loop(callback), 1000 / 20)
                        // stats.end() // Only for Stats
                    }.bind(this))
                }.bind(this), (1000 / 15))

            }

            this.bind = function () {
                $canvas.on('mousemove', function (e) {
                    config.position.x = e.pageX - $canvas.offset().left
                    config.position.y = e.pageY - $canvas.offset().top
                })
            }

            this.init = function () {
                this.setCanvas()
                this.setContext()
                this.setInitialPosition()
                this.createStars()
                this.loop(this.animateStars)
                this.bind()

            }
        }

        $.fn.constellation = function (options) {
            return this.each(function () {
                var c = new Constellation(this, options)
                c.init()
            })
        }

        // $.fn.textconstellation = function (options) {
        //   return this.each(function () {
        //     var c = new Constellation(this, options)
        //     return c.animateText()
        //   })
        // }
    })($, window)

// Init plugin

    $('#canvs2').constellation({
        star: {
            width: 4
        },
        // line: {
        //   color: 'rgba(150, 125, 105, .5)'
        // },
        radius: 50
    })

    // $('#canvs3').textconstellation({
    //   star: {
    //     width: 5
    //   },
    //   // line: {
    //   //   color: 'rgba(150, 125, 105, .5)'
    //   // },
    //   radius: 50
    // })


    setTimeout(() => {
        $('#wavybg-wrapper').addClass('fadein')
    }, 1800)

    // var context = document.querySelector('#canvs3').getContext('2d')

    // var color = $('.parampanel').css('background-color')
    // var smokyBGNow = $('#wavybg-wrapper').waterpipe({
    //   gradientStart: '#6bc1ff',
    //   // gradientEnd: '#6C7A89',
    //   // gradientEnd: '#9caab9',
    //   // gradientEnd: '#bccad9',
    //   // gradientEnd: '#ffffff',
    //   gradientEnd: '#dfefff',


    //   smokeOpacity: 0.05,
    //   smokeSize: 0.2,
    //   numCircles: 5,
    //   maxMaxRad: 150,
    //   minMaxRad: 1,
    //   minRadFactor: 0.5,
    //   iterations: 4,
    //   drawsPerFrame: 45,
    //   lineWidth: 1,
    //   speed: 1,
    //   // bgColorInner: '#6bc1ff',
    //   bgColorInner: '#c5d3e2',
    //   // bgColorOuter: '#003870'
    //   // bgColorOuter: '#004790'
    //   // bgColorOuter: '#ffffff'
    //   bgColorOuter: '#2980b9'
    // })

    // var context = document.querySelector('#canvs2').getContext('2d')
    // context.beginPath()
    // context.arc(300, 380, 50, 0, 1.5 * Math.PI)
    // context.fill()
    // // var context = $('#canvs').getContext('2d')
    // // context.font = 'italic 400 22px/2 sans-serif'
    // context.strokeStyle = '#ff0'
    // context.textBaseline = 'alphabetic'
    // context.moveTo(350, 20)
    // context.lineTo(450, 570)
    // context.stroke()

    // context.beginPath()
    // context.arc(480, 480, 250, 0, 1.5 * Math.PI)
    // context.fill()

    // var c = document.getElementById('canvs3')
    // var context = c.getContext('2d')
    // context.beginPath()
    // context.arc(300, 380, 50, 0, 2 * Math.PI,false)
    // // context.fillStyle = 'green'
    // context.fill()


    // var modal = document.getElementById('myModal')
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     // const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
    //     this.props.auth.onLoginProcessEndClick()
    //     // modal.style.display = 'none'
    //   }
    // }
})



