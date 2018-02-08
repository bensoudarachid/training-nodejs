import React, {Component} from 'react'
import cookie from 'react-cookie'
import 'jquery'
import $ from 'jquery'


if (process.env.BROWSER) {
    require('./home.scss')
}

class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
        $('.imgwrap').each(function (i, el) {
            var elm = $(el)
            var imgbg = elm.find('.imgbg')
            var img = elm.find('.dataimg')
            var imgSpinner = elm.find('.mdl-spinner')

            setTimeout(() => {
                if (img.load(true) && img[0].hasAttribute('data-src')) {
                    img[0].setAttribute('src', img[0].getAttribute('data-src'))
                    img[0].onload = function () {
                        img[0].removeAttribute('data-src')
                        imgSpinner.remove()

                        if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                            imgSpinner.remove()
                            elm.addClass('animated')

                            if (imgbg.hasClass('animated'))
                                return
                            else {
                                imgbg.removeClass('imgbg')
                                imgbg.addClass('animated imgwraptor')
                            }
                        }
                    }
                }
            }, 50)
        })
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleScroll)
    }

    handleScroll(event) {
        var idToken = cookie.load('jwt')
        var anim = function (elm) {
            var imgbg = elm.find('.imgbg')
            var img = elm.find('.dataimg')
            elm.addClass('animated')
            var rdm = Math.floor(Math.random() * 3) + 1
            var rdm2 = Math.floor(Math.random() * 2) + 1
            var imgAnim = rdm === 1 ? 'rubberBand' : rdm === 2 ? 'jello' : 'flip'
            img.addClass('animated ' + imgAnim + (rdm === 3 && rdm2 === 1 ? ' reverseanim' : ''))
            imgbg.removeClass('imgbg')
            var imgbgAnim = imgAnim === 'jello' ? 'rubberBand' : imgAnim === 'rubberBand' ? 'jello' : rdm2 === 1 ? 'fadeInLeft' : 'fadeInRight'
            imgbg.addClass('animated ' + imgbgAnim + ' imgwraptor')
        }
        $('.imgwrap').each(function (i, el) {
            var elm = $(el)
            var img = elm.find('.dataimg')
            var imgSpinner = elm.find('.mdl-spinner')
            if (img.load(true) && img[0].hasAttribute('data-src')) {
                img[0].setAttribute('src', img[0].getAttribute('data-src') + (img[0].getAttribute('data-src').includes('/api/') ? ('?access_token=' + idToken) : ''))
                img[0].onload = function () {
                    console.log('image loaded on scroll: ' + img[0].getAttribute('data-src'))
                    img[0].removeAttribute('data-src')
                    imgSpinner.remove()

                    if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                        if (elm.hasClass('animated')) {
                            return
                        } else {
                            anim(elm)
                        }
                    }

                }
            }
            if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                if (elm.hasClass('animated')) {
                    return
                }
                else {
                    anim(elm)
                }
            }
        })
    }

// <img src={'./images/0.png'} data-src={'./images/Blog-Coding.svg'}
// className='dataimg' alt='coding'/>

    render() {
        return (
            <div>
                <div className='home'>
                    <div className="container">

                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Coding.svg'}
                                         className='dataimg' alt='coding'/>

                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Deploying.svg'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Planning.svg'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="clearfix visible-md visible-lg"></div>

                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                                    <img src={'./images/0.png'} data-src={'./images/rocket.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/planningdev.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/media.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="clearfix visible-md visible-lg"></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
