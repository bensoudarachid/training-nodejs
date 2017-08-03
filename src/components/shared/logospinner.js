import React from 'react'

if (process.env.BROWSER) {
    console.log('LogoSpinner. environment is browser')
    require('./logospinner.scss')
}

<<<<<<< HEAD
<<<<<<< HEAD
export default class LogoSpinner extends React.Component {
    render() {
        return (
            <div className='logospinner'>
         <span className='mdlspinnerwrap'>
           <div className='mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active mdlspinner'></div>
         </span>
                <span className='logowrap'>
           <img src={'./images/RoyaLogoNeutralH120.png'} className='logo' alt='Roya logo'/>
         </span>
=======
export default
class LogoSpinner extends React.Component {
=======
export default class LogoSpinner extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    render() {
        return (
            <div className='logospinner'>
                <span className='mdlspinnerwrap'>
                    <div className='mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active mdlspinner'></div>
                </span>
                <span className='logowrap'>
                    <img src={'./images/RoyaLogoNeutralH120.png'} className='logo' alt='Roya logo'/>
                </span>
>>>>>>> 6e3ff02... webstorm big changes crash

            </div>
        )
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
    }
}