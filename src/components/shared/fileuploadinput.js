<<<<<<< HEAD
import React, {Component} from 'react'
=======
import React, { Component } from 'react'
// require('../../../node_modules/material-design-lite/dist//material.css')
// require('../../../node_modules/material-design-lite/dist/material.js')
>>>>>>> 6e3ff02... webstorm big changes crash


if (process.env.BROWSER) {
//  console.log('Appcomponent. environment is browser')
    require('./fileuploadinput.scss')
}


<<<<<<< HEAD
export default class FileUploadInput extends Component {
=======
export default
class FileUploadInput extends Component {
>>>>>>> 6e3ff02... webstorm big changes crash

    constructor(props) {
        super(props)

        // var fileInputTextDiv = document.getElementById('file_input_text_div')
        // var fileInput = document.getElementById('file_input_file')
        // var fileInputText = document.getElementById('file_input_text')
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
                    <label className={'justify image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored' + disabled}>
                        <span className={'glyphicon glyphicon-upload ' + disabled}></span>
                        <input ref='file_input_file' onChange={this.changeInputText} className='none' type='file' id={id} disabled={this.props.disabled}/>
                    </label>
                    <label className='uploadlabel' ref='file_input_text' name='file_input_text'>No image</label>
                </div>
            </div>
        )
    }

    // <input ref='file_input_text' name='file_input_text' className="mdl-textfield mdl-js-textfield" type="text" disabled readonly/>
>>>>>>> 6e3ff02... webstorm big changes crash
    // <div ref='file_input_text_div' className='bgr mdl-textfield mdl-js-textfield'>
    //   <input ref='file_input_text' name='file_input_text' className='bgp file_input_text mdl-textfield__input' type='text' disabled readonly />
    // </div>
//<label className='mdl-textfield__label' htmlFor='file_input_text'></label>

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
        // componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        var fileInput = this.refs.file_input_file
        fileInput.addEventListener('change', this.changeInputText)
        fileInput.addEventListener('change', this.changeState)
    }

    changeInputText(event) {
        event.preventDefault()
        // const fileInputTextDiv = this.refs.file_input_text_div
        var fileInput = this.refs.file_input_file
        var fileInputText = this.refs.file_input_text
        var str = fileInput.value
        if (str == '')
            str = 'No Image'
        // var str = value
        var i
        if (str.lastIndexOf('\\')) {
            i = str.lastIndexOf('\\') + 1
        } else if (str.lastIndexOf('/')) {
            i = str.lastIndexOf('/') + 1
        }
        fileInputText.innerHTML = str.slice(i, str.length)
        // fileInputText.value = str.slice(i, str.length)
    }

    // changeState() {
    //   const fileInputTextDiv = this.refs.file_input_text_div
    //   var fileInput = this.refs.file_input_file
    //   var fileInputText = this.refs.file_input_text
    //   if (fileInputText.value.length != 0) {
    //     if (!fileInputTextDiv.classList.contains('is-focused')) {
    //       fileInputTextDiv.classList.add('is-focused')
    //     }
    //   } else {
    //     if (fileInputTextDiv.classList.contains('is-focused')) {
    //       fileInputTextDiv.classList.remove('is-focused')
    //     }
    //   }
    // }
}

