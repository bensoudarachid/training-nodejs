<<<<<<< HEAD
<<<<<<< HEAD
import React, {Component} from 'react'
<<<<<<< HEAD
=======
import React, { Component } from 'react'
=======
import React, {Component} from 'react'
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
// require('../../../node_modules/material-design-lite/dist//material.css')
// require('../../../node_modules/material-design-lite/dist/material.js')
>>>>>>> 6e3ff02... webstorm big changes crash

=======
>>>>>>> b06ef94... clean code, remove comments

if (process.env.BROWSER) {
    require('./fileuploadinput.scss')
}

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
export default class FileUploadInput extends Component {
=======
export default
class FileUploadInput extends Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
=======
>>>>>>> b06ef94... clean code, remove comments
export default class FileUploadInput extends Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

    constructor(props) {
        super(props)

        this.changeInputText = this.changeInputText.bind(this)
    }
<<<<<<< HEAD

    // <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored schedulebutton">
    //   <span className='glyphicon glyphicon-upload '></span>
    // </button>
    // <input ref='file_input_file' onChange={this.changeInputText} className='none' type='file' id={id} disabled={this.props.disabled}/>
    render() {
        const id = this.props.id
        const disabled = this.props.disabled ? 'disabled' : ''

        return (
            <div className='file_input_div'>
                <div className='file_input'>
                    <label
                        className={'justify image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored' + disabled}>
                        <span className={'glyphicon glyphicon-upload ' + disabled}></span>
                        <input ref='file_input_file' onChange={this.changeInputText} className='none' type='file'
                               id={id} disabled={this.props.disabled}/>
                    </label>
                    <label className='uploadlabel' ref='file_input_text' name='file_input_text'>No image</label>
                </div>
            </div>
        )
    }

    // <input ref='file_input_text' name='file_input_text' className="mdl-textfield mdl-js-textfield" type="text" disabled readonly/> 
=======

    render() {
        const id = this.props.id
        const disabled = this.props.disabled ? 'disabled' : ''

        return (
            <div className='file_input_div'>
                <div className='file_input'>
                    <label
                        className={'justify image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored' + disabled}>
                        <span className={'glyphicon glyphicon-upload ' + disabled}></span>
                        <input ref='file_input_file' onChange={this.changeInputText} className='none' type='file'
                               id={id} disabled={this.props.disabled}/>
                    </label>
                    <label className='uploadlabel' ref='file_input_text' name='file_input_text'>No image</label>
                </div>
            </div>
        )
    }

<<<<<<< HEAD
    // <input ref='file_input_text' name='file_input_text' className="mdl-textfield mdl-js-textfield" type="text" disabled readonly/>
>>>>>>> 6e3ff02... webstorm big changes crash
    // <div ref='file_input_text_div' className='bgr mdl-textfield mdl-js-textfield'>
    //   <input ref='file_input_text' name='file_input_text' className='bgp file_input_text mdl-textfield__input' type='text' disabled readonly />
    // </div>
//<label className='mdl-textfield__label' htmlFor='file_input_text'></label>

=======
>>>>>>> b06ef94... clean code, remove comments
    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
<<<<<<< HEAD
        // componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments
        var fileInput = this.refs.file_input_file
        fileInput.addEventListener('change', this.changeInputText)
        fileInput.addEventListener('change', this.changeState)
    }

    changeInputText(event) {
        event.preventDefault()
        var fileInput = this.refs.file_input_file
        var fileInputText = this.refs.file_input_text
        var str = fileInput.value
        if (str == '')
            str = 'No Image'
        var i
        if (str.lastIndexOf('\\')) {
            i = str.lastIndexOf('\\') + 1
        } else if (str.lastIndexOf('/')) {
            i = str.lastIndexOf('/') + 1
        }
        fileInputText.innerHTML = str.slice(i, str.length)
    }

}

