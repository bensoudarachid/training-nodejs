import React from 'react'
import Immutable from 'immutable'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import FileUploadInput from '../../../components/shared/fileuploadinput'
import AppImage from '../../../components/shared/appimage'

var util = require('util')

if (process.env.BROWSER) {
    require('./trainingedit.scss')
}

export default class TrainingEdit extends React.Component {

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
<<<<<<< HEAD
<<<<<<< HEAD

        this.state = {
            edittraining: undefined
        }

    }

    render() {
//    console.log('trainingedit render!')
        const {auth} = this.props
        const training = this.props.trainingappmap.get('edittraining')
        // const confirmationActionFunction=this.props.trainingappmap.get('confirmationActionFunction')

=======
=======
    }
>>>>>>> b06ef94... clean code, remove comments

    static fetchData(actions, params) {
        return actions.retrieveTrainingDispatcher(params)
    }

    render() {
        const {auth} = this.props
        const training = this.props.trainingappmap.get('edittraining')

<<<<<<< HEAD
>>>>>>> 6e3ff02... webstorm big changes crash
//    console.log('training edit render. training='+require('util').inspect(training, false, null))
=======
>>>>>>> 7c3f8a8... Bug: vendor.js cannot be built: cannot find module mdl-selectfield although it is there. Solved by adding "main": "dist/mdl-selectfield.js" in node_modules\mdl-selectfield\package.json. Bug: Edit Training is not removed from redux state when components Training or TrainingSchedule are unmounted because of an undefined error
        const isTrainingEditFetching = this.props.trainingappmap.get('isTrainingEditFetching')
        const trainingEditError = this.props.trainingappmap.get('trainingEditError')
        const id = training == undefined ? '' : training.get('id')
        console.log('trainingedit.js render. training = ' + require('util').inspect(training, false, null))
        console.log('trainingedit.js render. training id = ' + require('util').inspect(id, false, null))
        const title = training == undefined ? '' : training.get('title')
        const secondaryTitle = training == undefined ? '' : training.get('secondaryTitle')
        const shortDescription = training == undefined ? '' : training.get('shortDescription')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!trainingedit render!' + shortDescription)
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!trainingedit render!' + shortDescription)
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
=======
>>>>>>> b06ef94... clean code, remove comments
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
<<<<<<< HEAD
          <h1>Needs authentication</h1>
        </span>
            )
        else if (training == undefined)
            return (
                <span>
          <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap'
                style={{width: '55px', height: '55px'}}></span>
        </span>
            )
        else
        //<form onSubmit={(event) => this.handleClick(event)} noValidate>
        // <form action='/api/training/updatetraining' method="post" enctype="multipart/form-data">
        //<TrainingImage ref='uploadcomp' trainingid={id} isUploading={saving}/>
//         <input className={'mdl-textfield__input '+disabled} ref='shortDescription' type='text' id='shortDescription' name='shortDescription' value={shortDescription} onChange={this.handleShortDescriptionChange.bind(this)} disabled={saving}/>
        // <TrainingImage ref='uploadcomp' trainingid={id} isUploading={saving}/>
        // key={'trainingeditform'+Math.random()}
        // key={'trainingimage'+Math.random()} ref='uploadcomp'
//training={this.props.trainingappmap.get('edittraining')}
        // {confirmationActionFunction &&
        // <div>
        //   <ConfirmationModal training={training} actions={this.props.actions}/>
        // </div>
        // }

            return (

                <div className='trainingedit blockborder'>
                    <form onSubmit={(event) => this.handleSave(event)} noValidate>
              <span className='mdl-grid mdl-grid--no-spacing'>
              <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div
                  className={errorClass}>{error}</div></span>
                <span className='mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                  <AppImage api='training' imgid={id} isUploading={saving}/>
                </span>
                
                <span
                    className='mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone fileuploadinput'>
                  <FileUploadInput id={'uploadfile-' + id} disabled={disabled} actions={this.props.actions}/>
=======
                    <h1>Needs authentication</h1>
                </span>
            )
        else if (training == undefined)
            return (
                <span>
<<<<<<< HEAD
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' style={{
                        width: '55px',
                        height: '55px'
                    }}></span>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap'
                          style={{
                              width: '55px',
                              height: '55px'
                          }}></span>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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

<<<<<<< HEAD
                <span className='mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                  <input className={'mdl-textfield__input ' + disabled} ref='title' type='text' id='title' name='title'
                         value={title} onChange={(event) => this.handleTitleChange(event)} disabled={saving}/>
                  <label className='mdl-textfield__label' htmlFor='title'>Title</label>
                  <span className="mdl-textfield__error" htmlFor='title'>{trainingEditError.get('title')}</span>
                </span>
                </span>

                <span className='mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone'>
                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                  <input className={'mdl-textfield__input ' + disabled} ref='secondaryTitle' type='text'
                         id='secondaryTitle' name='secondaryTitle' value={secondaryTitle}
                         onChange={(event) => this.handleSecondaryTitleChange(event)} disabled={saving}/>
                  <label className='mdl-textfield__label' htmlFor='secondaryTitle'>Secondary title</label>
                  <span className="mdl-textfield__error"
                        htmlFor='secondaryTitle'>{trainingEditError.get('secondaryTitle')}</span>
                </span>
                </span>

                <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                  <input className={'mdl-textfield__input ' + disabled} ref='shortDescription' type='text'
                         id='shortDescription' name='shortDescription' value={shortDescription}
                         onChange={(event) => this.handleShortDescriptionChange(event)} disabled={saving}/>
                  <label className='mdl-textfield__label' htmlFor='shortDescription'>Short description</label>
                  <span className="mdl-textfield__error"
                        htmlFor='shortDescription'>{trainingEditError.get('shortDescription')}</span>
                </span>
                </span>

                <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                  <textarea className={'mdl-textfield__input ' + disabled} ref='longDescription' type='text'
                            id='longDescription' name='longDescription' rows="7" value={longDescription}
                            onChange={(event) => this.handleLongDescriptionChange(event)} disabled={saving}></textarea>
                  <label className='mdl-textfield__label' htmlFor='longDescription'>Long Description</label>
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
                                    <button type='submit'
                                            className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
                                        Submit
                                    </button>
                                    <button onClick={(event) => this.handleDelete(event)}
                                            className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
                                        Delete
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

    // componentWillMount(){
    //   TrainingEdit.fetchData(this.props.actions,this.props.params)
    //   // return Promise.resolve(TrainingEdit.fetchData(this.props.actions,this.props.params))
    // }

    componentWillUnmount() {
        this.props.actions.loadEditTraining(undefined)
    }

    componentDidMount() {
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        // console.log('this.props.location.pathname='+require('util').inspect(this.props.location.pathname, false, null))
        // if( !this.props.location.pathname=='trainings/item/new')
        TrainingEdit.fetchData(this.props.actions, this.props.params)

        // TrainingEdit.fetchData(this.props.actions)
        // console.log('Training edit mounted.'+util.inspect( this.props.params, false, null))

        // const training=this.props.trainingappmap.get('edittraining')
        // if(process.env.BROWSER && this.props.app.get('previouslocation')!=undefined)
        // TrainingEdit.fetchData(this.props.actions,this.props.params)
        // return TrainingEdit.fetchData(this.props.actions,this.props.params)
        // return Promise.resolve(TrainingEdit.fetchData(this.props.actions,this.props.params))
    }

    //This is a necessary call when component is fetched on server side
    static fetchData(actions, params, hostname) {
        // console.log('Training list fetch data for hostname='+require('util').inspect(hostname, false, null))
        // console.log('Training edit. get training! param = '+util.inspect( params.id, false, null))

        //The return is necessary. if not the fetching is not resolved properly on the server side!
        return actions.retrieveTrainingDispatcher(params, hostname)
        // return Promise.resolve(actions.retrieveTrainingDispatcher(params.id,hostname))
    }

    componentDidUpdate() {
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        const trainingEditError = this.props.trainingappmap.get('trainingEditError')
        // console.log('Training edit. comp update')
        //Need this code to get correct placeholderfloating  behaviour. otherwise content and placeholder overlap
        var dialogInputs = document.querySelectorAll('.mdl-textfield')
        for (var i = 0, l = dialogInputs.length; i < l; i++) {
            if (dialogInputs[i].MaterialTextfield != undefined)
            // console.log('Training edit. CALLING dialogInputs[i].MaterialTextfield.checkDirty()')
                dialogInputs[i].MaterialTextfield.checkDirty()
            // }else
            //   console.log('Training edit. NOOOOO dialogInputs[i].MaterialTextfield.checkDirty() call')
            if (trainingEditError.get(dialogInputs[i].MaterialTextfield.input_.id) !== undefined)
                dialogInputs[i].className += ' is-invalid'
            else {
                dialogInputs[i].className = dialogInputs[i].className.replace(' is-invalid', ' ')
            }
        }

    }

=======
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

<<<<<<< HEAD
>>>>>>> 6e3ff02... webstorm big changes crash
    // shouldComponentUpdate(nextProps, nextState) {
    //   return true
    // }

=======
>>>>>>> b06ef94... clean code, remove comments
    handleSave(event) {
<<<<<<< HEAD
=======
        console.log('Save Training ')
>>>>>>> 6e3ff02... webstorm big changes crash
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
