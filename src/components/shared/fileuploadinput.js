import React, {Component} from 'react'

require('./fileuploadinput.scss')

export default class FileUploadInput extends Component {

    constructor(props) {
        super(props)

        this.changeInputText = this.changeInputText.bind(this)
    }

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

    componentDidMount() {
        componentHandler.upgradeDom()
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

