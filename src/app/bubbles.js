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
                        color: 'rgba(255, 255, 255, .5)', width: 100,
                        randomWidth: true
                    },
                    line: {
                        color: 'rgba(255, 0, 0, .9)',
                        width: 0.2
                    },
                    position: {
                        x: 0, y: 0
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

                create: function () {
                    this.drawEllipse(this.x, this.y, 2.5 * this.radius * config.width / window.innerWidth, 2 * this.radius * config.height / window.innerHeight)
                },
                drawEllipse: function (centerX, centerY, width, height) {
                    context.beginPath()

                    context.moveTo(centerX, centerY - height / 2)
                    context.bezierCurveTo(
                        centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2)
                    context.bezierCurveTo(
                        centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2)
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
                }

            }
<<<<<<< HEAD
            // this.animateText = function () {
            //   // canvas.width(($(window).width()).height($(window).height()))
            //   context.font = '110px Dancing Script'
            //   context.fillStyle = 'white'
            //   context.textAlign = 'center'
<<<<<<< HEAD
            //   context.fillText('JAVA', canvas.width/6, 1.0*canvas.height/3.7)         
=======
            //   context.fillText('JAVA', canvas.width/6, 1.0*canvas.height/3.7)
>>>>>>> 6e3ff02... webstorm big changes crash
            // }
=======
>>>>>>> b06ef94... clean code, remove comments

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

                setTimeout(function () {
                    window.requestAnimationFrame(function () {
                        this.loop(callback)
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
    })($, window)

    $('#canvs2').constellation({
        star: {
            width: 4
        },
        radius: 50
    })

    setTimeout(() => {
        $('#wavybg-wrapper').addClass('fadein')
    }, 1800)

})



