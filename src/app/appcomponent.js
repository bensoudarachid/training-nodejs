import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../services/actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'jquery'
import $ from 'jquery'
import ConfirmationModal from '../components/shared/confirmationmodal'

import Nav from './navigation/nav'
import LoginModal from './loginmodal.js'
import AppModalDlg from './appmodaldlg.js'

global.jQuery = require('jquery')

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require)
}

if (process.env.BROWSER) {
<<<<<<< HEAD
<<<<<<< HEAD
    require('./appcomponent.scss')
=======
    // window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']
    // require('./waterpipe.js')
=======
>>>>>>> b06ef94... clean code, remove comments
    require('./appcomponent.scss')

>>>>>>> 6e3ff02... webstorm big changes crash
    var modal = document.getElementById('myModal')
    window.onclick = function (event) {
        if (event.target == modal) {
            this.props.auth.onLoginProcessEndClick()
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
    // })
    // var rdm = 0
    // var lastrdm = 0
    // var textSwitchContainer = undefined //$('#textswitch')
    // window.isTextSwitchAnimated = true //$('#textswitch')

    // window.textswitcher = function() {
    //   window.isTextSwitchAnimated = true
    //   setTimeout( function() {
    //     console.log('isTextSwitchAnimated = '+window.isTextSwitchAnimated )
    //     if( window.isTextSwitchAnimated )
    //       window.requestAnimationFrame(window.textswitcher)
    //     else{
    //       console.log('I m out now ' )
    //       textSwitchContainer.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $(this).removeClass()
    //         textSwitchContainer.text('')
    //       })
    //       return
    //     }


    //     while( lastrdm === rdm )
    //       rdm = Math.floor(Math.random() * window.switchTextArray.length)
    //     console.log('rdm = '+rdm +', lastrdm = '+lastrdm+' : '+window.switchTextArray[rdm]+' : ')
    //     lastrdm = rdm
    //       // divContainer[0].style.display = 'none'
    // //headShake 300 flash 300 fadeInLeft 300 rubberBand
    //     textSwitchContainer.removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $(this).removeClass()
    //     })
    //     setTimeout( function() {
    //       textSwitchContainer.shuffleLetters({
    //         'text': window.switchTextArray[rdm]
    //       })
    //         // setTimeout( function() {
    //         //   container.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         //     $(this).removeClass()
    //         //   })
    //         // }, 4600 )
    //     }, 450 )
    //       // await sleep(1000)
    //   }, 2000 )
    // }
>>>>>>> 6e3ff02... webstorm big changes crash

    // $(document).ready(function() {
    //   textSwitchContainer = $('#textswitch')
    //   window.switchTextArray = ['Karim', 'Said', 'Rachid', 'Ilyas', 'Yussef', 'Amine', 'Salma', 'Hadi', 'Mehdi']
    //   window.textswitcher()
    //   // textSwitchId = window.requestAnimationFrame(window.textswitcher)
    //   setTimeout( function() {
    //     console.log('Cancel now : ')
    //     window.isTextSwitchAnimated = false
    //   }, 12000 )
    // })
=======
>>>>>>> b06ef94... clean code, remove comments
}

class AppComponent extends React.Component {

    constructor() {
<<<<<<< HEAD
<<<<<<< HEAD
        super(...arguments)
    }


    componentDidMount() {
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        // console.log('window width = '+$(window).width())

        if (process.env.BROWSER) {
            require('./waterpipebg.js')
            require('./bubbles.js')
        }
        this.handleBubblesVisibility()
        window.addEventListener('scroll', this.handleBubblesVisibility)
        window.addEventListener('resize', this.handleBubblesVisibility)
    }


    componentWillReceiveProps(nextProps) {
        // console.log('app. this.props.location='+require('util').inspect(this.props.location, false, null))
        //console.log('app. nextProps.location='+require('util').inspect(nextProps.location, false, null))
        if (nextProps.location !== this.props.location && process.env.BROWSER) {
            this.props.actions.savePreviousLocation(this.props.location.pathname)
        }
    }


    handleBubblesVisibility(event) {
        if ($(window).width() < 480)
        // $('#starbg-wrapper')[0].style.display = 'none'
            $('#starbg-wrapper')[0].style.visibility = 'hidden'
        else
        // $('#starbg-wrapper')[0].style.display = 'block'
            $('#starbg-wrapper')[0].style.visibility = 'visible'
    }

=======
        1
=======
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
        super(...arguments)
    }

    componentDidMount() {
        componentHandler.upgradeDom()

        if (process.env.BROWSER) {
            require('./waterpipebg.js')
            require('./bubbles.js')
        }
        this.handleBubblesVisibility()
        window.addEventListener('scroll', this.handleBubblesVisibility)
        window.addEventListener('resize', this.handleBubblesVisibility)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location && process.env.BROWSER) {
            this.props.actions.savePreviousLocation(this.props.location.pathname)
        }
    }

    handleBubblesVisibility(event) {
        if ($(window).width() < 480)
            $('#starbg-wrapper')[0].style.visibility = 'hidden'
        else
            $('#starbg-wrapper')[0].style.visibility = 'visible'
    }

<<<<<<< HEAD
    // <ReactCSSTransitionGroup
    //   component='div'
    //   transitionName="page"
    //   transitionEnterTimeout={500}
    //   transitionLeaveTimeout={200}
    //   transitionAppear={false}
    //   transitionEnter={true}
    //   transitionLeave={true}
    // >
    // {children}
    // </ReactCSSTransitionGroup>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments
    render() {
        const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
        const isBrowser = typeof window !== 'undefined'
        const loginMessage = auth.get('loginMessage')
        const loginProgress = auth.get('loginProgress')
        const registererror = this.props.auth.get('registererror')
        const appError = this.props.app.get('appError')
        const confirmationActionFunction = this.props.app.get('confirmationActionFunction')

        var children = this.updateChildren(this.props.children, this.props)

        return (
            <div id='appcomp'>
                <div id="wavybg-wrapper">
                    <canvas id="canvs1">Your browser does not support HTML5 canvas.</canvas>
                </div>
                <div id="starbg-wrapper">
                    <canvas id="canvs2">Your browser does not support HTML5 canvas.</canvas>
                </div>

                <div>
                    <Nav
                        actions={this.props.actions}
                        auth={this.props.auth}
                        app={this.props.app}
                    />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                {loginProgress &&
                <div>
                    <LoginModal
                        actions={this.props.actions}
                        auth={this.props.auth}
                    />
                </div>
                }
                {confirmationActionFunction &&
                <div>
                    <ConfirmationModal actions={this.props.actions}/>
                </div>
                }
<<<<<<< HEAD
=======
      {loginProgress &&
      <div>
          <LoginModal
              actions={this.props.actions}
              auth={this.props.auth}
          />
      </div>
          }
      {confirmationActionFunction &&
      <div>
          <ConfirmationModal actions={this.props.actions}/>
      </div>
          }
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

                <div>
                    <div id='contt'>
                        <div>
                            <ReactCSSTransitionGroup
                                component='div'
                                transitionName="page"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={200}
                                transitionAppear={false}
                                transitionEnter={true}
                                transitionLeave={true}
                            >
<<<<<<< HEAD
<<<<<<< HEAD
                                {children}
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                    {appError &&
                    <div>
                        <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: ' + appError}/>
                    </div>
                    }
                </div>

=======
                {children}
=======
                                {children}
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                    {appError &&
                    <div>
                        <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: ' + appError}/>
                    </div>
                    }
                </div>

<<<<<<< HEAD

>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments
            </div>

        )
    }

<<<<<<< HEAD
<<<<<<< HEAD
    getSubstringUntilNth(str, pattern, n) {
        return str.split(pattern, n).join(pattern)
    }

    updateChildren(children, props) {
        var childrenBack = React.Children.map(children,
            function (child) {
                const segment = this.getSubstringUntilNth(props.location.pathname, '/', 2)
                const x = {...props}
                return React.cloneElement(child, {...props, key: segment})
            }.bind(this))
        return childrenBack
    }

}
=======
    // renderOld() {
    //   const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
    //   const isBrowser = typeof window !== 'undefined'
    //   const loginMessage = auth.get('loginMessage')
    //   const loginProgress = auth.get('loginProgress')
    //   const registererror = this.props.auth.get('registererror')
    //   const appError = this.props.app.get('appError')
    //   var children = this.updateChildren(this.props.children, this.props)


    //   return (
    //     <div id='appcomp'>
    //     <div id="wavybg-wrapper">
    //         <canvas id="canvs1">Your browser does not support HTML5 canvas.</canvas>
    //     </div>
    //     <div id="starbg-wrapper">
    //         <canvas id="canvs2">Your browser does not support HTML5 canvas.</canvas>
    //     </div>

    //     <div>
    //       <Nav
    //         actions={this.props.actions}
    //         auth={this.props.auth}
    //       />
    //     </div>
    //     {loginProgress &&
    //     <div>
    //     <LoginModal
    //         actions={this.props.actions}
    //         auth={this.props.auth}
    //     />
    //     </div>
    //     }
    //       <div>
    //         <div id='contt'>
    //           {loginMessage?

    //             <div>
    //               <h1>{loginMessage}</h1>
    //             </div>
    //             :
    //             <div>
    //               <ReactCSSTransitionGroup
    //                 component='div'
    //                 transitionName="page"
    //                 transitionEnterTimeout={500}
    //                 transitionLeaveTimeout={200}
    //                 transitionAppear={false}
    //                 transitionEnter={true}
    //                 transitionLeave={true}
    //               >
    //               {children}
    //               </ReactCSSTransitionGroup>
    //             </div>
    //           }
    //         </div>
    //         {appError &&
    //         <div>
    //           <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: '+appError}/>
    //         </div>
    //         }
    //       </div>


    //     </div>

    //   )
    // }

    // { auth.get('loginProgress')?
    //   <div>
    //       <h1>WAHNSINNWAHNSINNWAHNSINNWAHNSINNWAHNSINNWAHNSINNWAHNSINN</h1>
    //   </div>
    //   :
    // }
=======
>>>>>>> b06ef94... clean code, remove comments

    getSubstringUntilNth(str, pattern, n) {
        return str.split(pattern, n).join(pattern)
    }

    updateChildren(children, props) {
        var childrenBack = React.Children.map(children,
            function (child) {
                const segment = this.getSubstringUntilNth(props.location.pathname, '/', 2)
                const x = {...props}
                return React.cloneElement(child, {...props, key: segment})
            }.bind(this))
        return childrenBack
    }
}

<<<<<<< HEAD
// {React.cloneElement(this.props.children, { key: segment })}
// {children}
// {loginMessage?
//   <div>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//   </div>
//   :
//   <div>
//     <div id='contt'>
//     { children }
//     </div>
//     {appError &&
//     <div>
//       <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: '+appError}/>
//     </div>
//     }
//   </div>
// }

>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
