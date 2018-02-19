import React from 'react'
import Immutable from 'immutable'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import FileUploadInput from 'components/shared/fileuploadinput'
import AppImage from 'components/shared/appimage'

import util from 'util'

import './trainingedit.scss'

export default class TrainingEdit extends React.Component {

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    static fetchData(actions, params) {
        return actions.retrieveTrainingDispatcher(params)
    }

    render() {
        const {auth} = this.props
        const training = this.props.trainingappmap.get('edittraining')

        const isTrainingEditFetching = this.props.trainingappmap.get('isTrainingEditFetching')
        const trainingEditError = this.props.trainingappmap.get('trainingEditError')
        const id = training == undefined ? '' : training.get('id')
//        console.log('trainingedit.js render. training = ' + require('util').inspect(training, false, null))
//        console.log('trainingedit.js render. training id = ' + require('util').inspect(id, false, null))
        const title = training == undefined ? '' : training.get('title')
        const secondaryTitle = training == undefined ? '' : training.get('secondaryTitle')
        const shortDescription = training == undefined ? '' : training.get('shortDescription')
        const longDescription = training == undefined ? '' : training.get('longDescription')
        const duration = training == undefined ? '' : training.get('duration')
        const needActionConfirmation = training == undefined ? '' : training.get('needDeleteConfirmation')

        const error = training == undefined ? '' : training.get('error')
        const errorClass = error ? 'error' : ''
        let saving = training == undefined ? '' : training.get('saving')
        if (saving == undefined)
            saving = false
        const disabled = saving ? 'disabled' : ''

        if (!auth.get('isAuthenticated'))
            return (
                <span>
                    <h1>Needs authentication</h1>
                </span>
            )
        else if (training == undefined)
            return (
                <span>
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap'
                          style={{
                              width: '55px',
                              height: '55px'
                          }}></span>
                </span>
            )
        else
            return (
                <div className='trainingedit blockborder'>
                    <form onSubmit={(event) => this.handleSave(event)} noValidate>
                        <span className='mdl-grid mdl-grid--no-spacing'>
                            <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                                <div className={errorClass}>{error}</div>
                            </span>
                            <span className='mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                                <AppImage api='training' imgid={id} isUploading={saving}/>
                            </span>

                            <span
                                className='mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone fileuploadinput'>
                                <FileUploadInput id={'uploadfile-' + id} disabled={disabled}
                                                 actions={this.props.actions}/>
                            </span>

                            <span className='mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
                                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                    <input className={'mdl-textfield__input ' + disabled} ref='title' type='text'
                                           id='title' name='title' value={title}
                                           onChange={(event) => this.handleTitleChange(event)} disabled={saving}/>
                                    <label className='mdl-textfield__label' htmlFor='title'>Title</label>
                                    <span className="mdl-textfield__error"
                                          htmlFor='title'>{trainingEditError.get('title')}</span>
                                </span>
                            </span>

                            <span className='mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone'>
                                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                    <input className={'mdl-textfield__input ' + disabled} ref='secondaryTitle'
                                           type='text' id='secondaryTitle' name='secondaryTitle' value={secondaryTitle}
                                           onChange={(event) => this.handleSecondaryTitleChange(event)}
                                           disabled={saving}/>
                                    <label className='mdl-textfield__label'
                                           htmlFor='secondaryTitle'>Secondary title</label>
                                    <span className="mdl-textfield__error"
                                          htmlFor='secondaryTitle'>{trainingEditError.get('secondaryTitle')}</span>
                                </span>
                            </span>

                            <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                    <input className={'mdl-textfield__input ' + disabled} ref='shortDescription'
                                           type='text' id='shortDescription' name='shortDescription'
                                           value={shortDescription}
                                           onChange={(event) => this.handleShortDescriptionChange(event)}
                                           disabled={saving}/>
                                    <label className='mdl-textfield__label'
                                           htmlFor='shortDescription'>Short description</label>
                                    <span className="mdl-textfield__error"
                                          htmlFor='shortDescription'>{trainingEditError.get('shortDescription')}</span>
                                </span>
                            </span>

                            <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                    <textarea className={'mdl-textfield__input ' + disabled} ref='longDescription'
                                              type='text' id='longDescription' name='longDescription' rows="7"
                                              value={longDescription}
                                              onChange={(event) => this.handleLongDescriptionChange(event)}
                                              disabled={saving}></textarea>
                                    <label className='mdl-textfield__label'
                                           htmlFor='longDescription'>Long Description</label>
                                    <span className="mdl-textfield__error"
                                          htmlFor='longDescription'>{trainingEditError.get('longDescription')}</span>
                                </span>
                            </span>

                        </span>
                        <br/>
                        <div className='footer'>
                            {saving ?
                                <div
                                    className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap"></div>
                                :
                                <div key={'trainingeditbuttonsarenotrerenderedproperlyaftersubmit' + Math.random()}>
                                    <button id='sub' type='submit'
                                            className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'>
                                        <span className='glyphicon glyphicon-save'/>
                                    </button>

                                    <button id='deletetheshit' onClick={(event) => this.handleDelete(event)}
                                            className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'>
                                        <span className='glyphicon glyphicon-erase'/>
                                    </button>
                                </div>
                            }

                        </div>
                    </form>
                </div>

            )
    }

    handleTitleChange(e) {
        this.props.actions.handleTrainingEditChange('title', e.target.value)
    }

    handleSecondaryTitleChange(e) {
        this.props.actions.handleTrainingEditChange('secondaryTitle', e.target.value)
    }

    handleShortDescriptionChange(e) {
        this.props.actions.handleTrainingEditChange('shortDescription', e.target.value)
    }


    handleLongDescriptionChange(e) {
        this.props.actions.handleTrainingEditChange('longDescription', e.target.value)
    }

    componentWillUnmount() {
        console.log('Training edit componentWillUnmount')
        this.props.actions.loadEditTraining(undefined)
        this.props.actions.setTrainingUserInputError(undefined);
    }

    componentDidMount() {
        componentHandler.upgradeDom()
        TrainingEdit.fetchData(this.props.actions, this.props.params)
    }

    componentDidUpdate() {
        componentHandler.upgradeDom()
        const trainingEditError = this.props.trainingappmap.get('trainingEditError')
        var dialogInputs = document.querySelectorAll('.mdl-textfield')
        for (var i = 0, l = dialogInputs.length; i < l; i++) {
            if (dialogInputs[i].MaterialTextfield != undefined)
                dialogInputs[i].MaterialTextfield.checkDirty()
            if (trainingEditError.get(dialogInputs[i].MaterialTextfield.input_.id) !== undefined)
                dialogInputs[i].className += ' is-invalid'
            else {
                dialogInputs[i].className = dialogInputs[i].className.replace(' is-invalid', ' ')
            }
        }
    }

    handleSave(event) {
        console.log('Save Training ')
        event.preventDefault()
        const title = this.refs.title
        const secondaryTitle = this.refs.secondaryTitle
        const shortDescription = this.refs.shortDescription
        const longDescription = this.refs.longDescription
        const trainingid = this.props.trainingappmap.get('edittraining').get('id')
        var fileinput = document.querySelector('#uploadfile-' + trainingid)

        var training = {
            title: title.value.trim(),
            secondaryTitle: secondaryTitle.value.trim(),
            shortDescription: shortDescription.value.trim(),
            longDescription: longDescription.value.trim()
        }
        training = this.props.trainingappmap.get('edittraining').merge(Immutable.Map(training))
        this.props.actions.updateTrainingDispatcher(training, this.props.trainingappmap.get('edittraining'), fileinput.files[0])

    }

    handleDelete(event) {
        event.preventDefault()
        this.props.actions.needActionConfirmation(true, this.props.actions.deleteEditTrainingDispatcher, {})
    }


}
