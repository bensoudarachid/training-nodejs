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
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
<<<<<<< HEAD
>>>>>>> 6e3ff02... webstorm big changes crash
        // var idToken = cookie.load('jwt')
        // console.log('++++++++++++++++homejs. compdidmount')
=======
>>>>>>> b06ef94... clean code, remove comments
        $('.imgwrap').each(function (i, el) {
            var elm = $(el)
            var imgbg = elm.find('.imgbg')
            var img = elm.find('.dataimg')
            var imgSpinner = elm.find('.mdl-spinner')

            setTimeout(() => {
<<<<<<< HEAD
<<<<<<< HEAD
                if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
                if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                if (img.load(true) && img[0].hasAttribute('data-src')) {
>>>>>>> b06ef94... clean code, remove comments
                    img[0].setAttribute('src', img[0].getAttribute('data-src'))
                    img[0].onload = function () {
                        img[0].removeAttribute('data-src')
                        imgSpinner.remove()

                        if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                            imgSpinner.remove()
                            elm.addClass('animated')
<<<<<<< HEAD
                            // var rdm = Math.floor(Math.random() * 3) + 1
                            // var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
                            // img.addClass('animated '+imgAnim)
                            // // img.addClass('animated rubberBand')
                            // if(imgbg.hasClass('animated'))
                            //   return
                            // else{
                            //   imgbg.removeClass('imgbg')
                            //   rdm = Math.floor(Math.random() * 2) + 1
                            //   var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
<<<<<<< HEAD
                            //   imgbg.addClass('animated '+imgbgAnim+' imgwraptor') 
=======
                            //   imgbg.addClass('animated '+imgbgAnim+' imgwraptor')
>>>>>>> 6e3ff02... webstorm big changes crash
                            // }
=======
>>>>>>> b06ef94... clean code, remove comments

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
<<<<<<< HEAD
<<<<<<< HEAD
            if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
            if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
=======
            if (img.load(true) && img[0].hasAttribute('data-src')) {
>>>>>>> b06ef94... clean code, remove comments
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

    render() {
<<<<<<< HEAD
        // let authenticated = cookie.load('jwt') ? true : false
        // if( !authenticated && this.props.auth.get('loginactualurl')!=undefined && this.props.auth.get('loginactualurl')!='/')
        //   return (
        //     <div></div>
        //   )

        // {this.props.auth.get('loginProgress')?
        //   <div>
        //     <h1>Please login home</h1>
        //   </div>
<<<<<<< HEAD
        // :        
=======
        // :
>>>>>>> 6e3ff02... webstorm big changes crash

=======
>>>>>>> b06ef94... clean code, remove comments
        return (
            <div>
                <div className='home'>
                    <div className="container">

                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Coding.svg'}
                                         className='dataimg' alt='coding'/>
<<<<<<< HEAD
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Coding.svg'} className='dataimg' alt='coding'/>
                                </div>
                                <p>1. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                                </div>
                                <p>1. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Deploying.svg'}
                                         className='dataimg' alt='coding'/></div>
                                <p>2. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Deploying.svg'} className='dataimg' alt='coding'/>
                                </div>
                                <p>2. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
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
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Planning.svg'}
                                         className='dataimg' alt='coding'/></div>
                                <p>3. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Planning.svg'} className='dataimg' alt='coding'/>
                                </div>
                                <p>3. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
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
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="clearfix visible-md visible-lg"></div>

                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'}
                                         className='dataimg' alt='coding'/></div>
                                <p>4. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'} className='dataimg' alt='coding'/>
                                </div>
                                <p>4. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
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
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-PlanningNeutral1.png'}
                                         className='dataimg' alt='coding'/></div>
                                <p>5. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-PlanningNeutral1.png'} className='dataimg' alt='coding'/>
                                </div>
                                <p>5. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
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
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-DeployingNeutral1.png'}
                                         className='dataimg' alt='coding'/></div>
                                <p>6. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-DeployingNeutral1.png'} className='dataimg' alt='coding'/>
                                </div>
                                <p>6. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
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
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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
<<<<<<< HEAD


<<<<<<< HEAD
// <div className="row"> 
=======
// <div className="row">
>>>>>>> 6e3ff02... webstorm big changes crash
//   <ul className='mdl-list'>
//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 1
<<<<<<< HEAD
//       </span> 
=======
//       </span>
>>>>>>> 6e3ff02... webstorm big changes crash
//       <a className="mdl-list__item-primary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 2
//       </span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 3</span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 4</span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//   </ul>
// </div>
=======
>>>>>>> b06ef94... clean code, remove comments
