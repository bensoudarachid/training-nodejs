import React, {Component, PropTypes} from 'react'
import 'jquery'

if (process.env.BROWSER) {
    require('./login.scss')
<<<<<<< HEAD
    // require('materialize-css/sass/materialize.scss')
    // require('materialize-css/sass/style.scss')
    // require('materialize-css/sass/components/_color.scss')

<<<<<<< HEAD
    // $(document).ready(function() { 
=======
    // $(document).ready(function() {
>>>>>>> 6e3ff02... webstorm big changes crash
    //   var modal = document.getElementById('myModal')

    // // Get the button that opens the modal
    // // var btn = $('myBtn')[0]
    //   var btn = document.getElementById('myBtn')
    //   // console.log('loginjs. myBtn '+btn)
    // // Get the <span> element that closes the modal
    //   var span = document.getElementsByClassName('close')[0]

<<<<<<< HEAD
    // // When the user clicks the button, open the modal 
=======
    // // When the user clicks the button, open the modal
>>>>>>> 6e3ff02... webstorm big changes crash
    //   btn.onclick = function() {
    //     modal.style.display = 'block'
    //   }

    // // When the user clicks on <span> (x), close the modal
    //   span.onclick = function() {
    //     modal.style.display = 'none'
    //   }

    // // When the user clicks anywhere outside of the modal, close it
    //   window.onclick = function(event) {
    //     if (event.target == modal) {
    //       modal.style.display = 'none'
    //     }
    //   }

    // })

=======
>>>>>>> b06ef94... clean code, remove comments
}

<<<<<<< HEAD
<<<<<<< HEAD
export default class Login extends Component {
<<<<<<< HEAD
=======
export default
class Login extends Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class Login extends Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    // <li><button onClick={(event) => this.handleClick(event)} className='btn btn-primary'>
    //  <span className='glyphicon glyphicon-log-in'></span> Login
    // </button></li>
    // </ul>
    // <li>
    // <input type='submit' value='Login' className='btn btn-primary'/>
    // </li>

    // <li>
    //     <button type='submit' className='btn btn-primary'>
    //       <span className='glyphicon glyphicon-log-in'></span> Login
    //     </button>
    // </li>

    // <li>
    // <TextField type='text' ref='username' className='inputfield' hintText='type your login here' floatingLabelText='Login'/>
    // </li>
    // <li>
<<<<<<< HEAD
    // <TextField type='password' ref='password' className='inputfield' hintText='type your password here' floatingLabelText='Password'/>        
    // </li>

    render() {
        const {errorMessage} = this.props
=======
    // <TextField type='password' ref='password' className='inputfield' hintText='type your password here' floatingLabelText='Password'/>
    // </li>
=======
>>>>>>> b06ef94... clean code, remove comments

    render() {
<<<<<<< HEAD
        const { errorMessage } = this.props
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        const {errorMessage} = this.props
<<<<<<< HEAD
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
        // var myStyle = {fontSize: 100, color: '#FF0000'}
        //       <li><input type='text' ref='username' className='form-control' placeholder='Username'/></li>
        //<input type='password' ref='password' className='form-control' placeholder='Password'/>
=======
>>>>>>> b06ef94... clean code, remove comments
        return (
            <div id='loginform'>

                <form onSubmit={this.handleClick.bind(this)}>
                    <ul>
                        <li>
                            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                <input className='mdl-textfield__input' ref='username' type='text' id='username'/>
                                <label className='mdl-textfield__label' htmlFor='username'>Login</label>
                            </div>
                        </li>
                        <li>
                            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                <input className='mdl-textfield__input' ref='password' type='password' id='password'/>
                                <label className='mdl-textfield__label' htmlFor='password'>Password</label>
                            </div>
                        </li>
                        <li>
<<<<<<< HEAD
<<<<<<< HEAD
                            <button type='submit'
                                    className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored button'>
                                <span className='glyphicon glyphicon-log-in'></span> Login
                            </button>
                        </li>
                    </ul>
                    {errorMessage &&
                    <p style={{fontSize: 25, color: '#FF0000'}}>{errorMessage}</p>
                    }
=======
                            <button type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored button'>
=======
                            <button type='submit'
                                    className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored button'>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                                <span className='glyphicon glyphicon-log-in'></span>
                                Login
                            </button>
                        </li>
                    </ul>
<<<<<<< HEAD
        {errorMessage &&
        <p style={{fontSize: 25, color: '#FF0000'}}>{errorMessage}</p>
            }
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                    {errorMessage &&
                    <p style={{fontSize: 25, color: '#FF0000'}}>{errorMessage}</p>
                    }
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                </form>
            </div>
        )
    }

    handleClick(event) {
        event.preventDefault()
        var username = this.refs.username.value.trim()
        var password = this.refs.password.value.trim()
        const creds = {username: username, password: password}
        this.props.onLoginClick(creds)
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}
