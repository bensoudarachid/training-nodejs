import React from 'react'
import Immutable from 'immutable'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import FileUploadInput from '../../../components/shared/fileuploadinput'
// import TrainingImage from '../shared/trainingimage'
import AppImage from '../../../components/shared/appimage'
// import ConfirmationModal from './confirmationmodal'


// import _ from 'lodash'
var util = require('util')

if (process.env.BROWSER) {
    require('./trainingedit.scss')
}

export default
class TrainingEdit extends React.Component {

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
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

        // this.state = {
        //   edittraining: undefined
        // }

    }

    render() {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!trainingedit render!')
        const {auth} = this.props
        const training = this.props.trainingappmap.get('edittraining')
        // const confirmationActionFunction=this.props.trainingappmap.get('confirmationActionFunction')

>>>>>>> 6e3ff02... webstorm big changes crash
//    console.log('training edit render. training='+require('util').inspect(training, false, null))
        const isTrainingEditFetching = this.props.trainingappmap.get('isTrainingEditFetching')
        const trainingEditError = this.props.trainingappmap.get('trainingEditError')
        const id = training == undefined ? '' : training.get('id')
        const title = training == undefined ? '' : training.get('title')
        // console.log('###################################Training edit render title ='+require('util').inspect(title, false, null))
        const secondaryTitle = training == undefined ? '' : training.get('secondaryTitle')
        const shortDescription = training == undefined ? '' : training.get('shortDescription')
<<<<<<< HEAD
=======
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!trainingedit render!' + shortDescription)
>>>>>>> 6e3ff02... webstorm big changes crash
        const longDescription = training == undefined ? '' : training.get('longDescription')
        const duration = training == undefined ? '' : training.get('duration')
        // const needDeleteConfirmation = training==undefined?'':training.get('needDeleteConfirmation')
        const needActionConfirmation = training == undefined ? '' : training.get('needDeleteConfirmation')

        const error = training == undefined ? '' : training.get('error')
        const errorClass = error ? 'error' : ''
        let saving = training == undefined ? '' : training.get('saving')
        if (saving == undefined)
            saving = false
        // const isUploading = false
        const disabled = saving ? 'disabled' : ''
        // console.log('trainingedit render. saving = '+util.inspect( saving, false, null))

        // {training==undefined?
        // //if i use div instead of span, big parts of the view are not clickable!
        //   <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' style={{width:'55px',height:'55px'}}></span>
        //   :
        // {training==undefined &&
        //   <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' style={{width:'55px',height:'55px'}}></span>
        // }
        // {training!=undefined &&

        // <span className="mdl-textfield__error" htmlFor='title'>{trainingEditError.get('title')}</span>
        // <input className={'mdl-textfield__input '+disabled} ref='longDescription' type='text' id='longDescription' name='longDescription' value={longDescription} onChange={this.handleLongDescriptionChange.bind(this)} disabled={saving}/>

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
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' style={{
                        width: '55px',
                        height: '55px'
                    }}></span>
>>>>>>> 6e3ff02... webstorm big changes crash
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
                            <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                                <div className={errorClass}>{error}</div>
                            </span>
                            <span className='mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                                <AppImage api='training' imgid={id} isUploading={saving} />
                            </span>

                            <span className='mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone fileuploadinput'>
                                <FileUploadInput id={'uploadfile-' + id} disabled={disabled} actions={this.props.actions}/>
                            </span>

                            <span className='mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
                                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                    <input className={'mdl-textfield__input ' + disabled} ref='title' type='text' id='title' name='title' value={title} onChange={(event) => this.handleTitleChange(event)} disabled={saving}/>
                                    <label className='mdl-textfield__label' htmlFor='title'>Title</label>
                                    <span className="mdl-textfield__error" htmlFor='title'>{trainingEditError.get('title')}</span>
                                </span>
                            </span>

                            <span className='mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone'>
                                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                    <input className={'mdl-textfield__input ' + disabled} ref='secondaryTitle' type='text' id='secondaryTitle' name='secondaryTitle' value={secondaryTitle} onChange={(event) => this.handleSecondaryTitleChange(event)}disabled={saving}/>
                                    <label className='mdl-textfield__label' htmlFor='secondaryTitle'>Secondary title</label>
                                    <span className="mdl-textfield__error" htmlFor='secondaryTitle'>{trainingEditError.get('secondaryTitle')}</span>
                                </span>
                            </span>

                            <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                    <input className={'mdl-textfield__input ' + disabled} ref='shortDescription' type='text' id='shortDescription' name='shortDescription' value={shortDescription} onChange={(event) => this.handleShortDescriptionChange(event)} disabled={saving}/>
                                    <label className='mdl-textfield__label' htmlFor='shortDescription'>Short description</label>
                                    <span className="mdl-textfield__error"htmlFor='shortDescription'>{trainingEditError.get('shortDescription')}</span>
                                </span>
                            </span>

                            <span className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                                <span className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                    <textarea className={'mdl-textfield__input ' + disabled} ref='longDescription' type='text' id='longDescription' name='longDescription' rows="7" value={longDescription} onChange={(event) => this.handleLongDescriptionChange(event)} disabled={saving}></textarea>
                                    <label className='mdl-textfield__label' htmlFor='longDescription'>Long Description</label>
                                    <span className="mdl-textfield__error" htmlFor='longDescription'>{trainingEditError.get('longDescription')}</span>
                                </span>
                            </span>

                        </span>
                        <br/>
                        <div className='footer'>
              {saving ?
                  <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap"></div>
                  :
                  <div key={'trainingeditbuttonsarenotrerenderedproperlyaftersubmit' + Math.random()}>
                      <button id='sub' type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
                      Submit
                      </button>
                      <button id='deletetheshit' onClick={(event) => this.handleDelete(event)} className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
                      Delete
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

    // componentWillMount(){
    //   TrainingEdit.fetchData(this.props.actions,this.props.params)
    //   // return Promise.resolve(TrainingEdit.fetchData(this.props.actions,this.props.params))
    // }

    componentWillUnmount() {
        this.props.actions.loadEditTraining(undefined)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
        TrainingEdit.fetchData(this.props.actions, this.props.params)
    }

    //This is a necessary call when component is fetched on server side
    static fetchData(actions, params, hostname) {
        // console.log('Call Training Edit fetch data  <-----------------------------')
        // console.log('Training edit. get training! param = '+util.inspect( params.id, false, null))

        //The return is necessary. if not the fetching is not resolved properly on the server side!
        return actions.retrieveTrainingDispatcher(params, hostname)
        // return Promise.resolve(actions.retrieveTrainingDispatcher(params.id,hostname))
    }

    componentDidUpdate() {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Training edit. comp update')
        componentHandler.upgradeDom()
        const trainingEditError = this.props.trainingappmap.get('trainingEditError')
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

>>>>>>> 6e3ff02... webstorm big changes crash
    // shouldComponentUpdate(nextProps, nextState) {
    //   return true
    // }

    handleSave(event) {
<<<<<<< HEAD
=======
        console.log('Save Training ')
>>>>>>> 6e3ff02... webstorm big changes crash
        event.preventDefault()
        // const usernameref = this.refs.username
        // const usernameref = $('#usernameid')
        // const usernameinput = usernameref.find('.mdl-textfield__input')
        // console.log('Registeration. '+usernameinput[0].value)
        const title = this.refs.title
        // console.log('Register User: '+this.refs.username.value)
        const secondaryTitle = this.refs.secondaryTitle
        const shortDescription = this.refs.shortDescription
        const longDescription = this.refs.longDescription
        // console.log('Register passwordcheck: '+this.refs.passwordCheck.value)
        const trainingid = this.props.trainingappmap.get('edittraining').get('id')
        var fileinput = document.querySelector('#uploadfile-' + trainingid)

        var training = {
            // username: usernameinput[0].value.trim(),
            title: title.value.trim(),
            secondaryTitle: secondaryTitle.value.trim(),
            shortDescription: shortDescription.value.trim(),
            longDescription: longDescription.value.trim()
        }
        training = this.props.trainingappmap.get('edittraining').merge(Immutable.Map(training))
        // console.log('Training edit. call update with this item: '+util.inspect(training, false, null))
        // this.props.actions.updateTraining(training)
        this.props.actions.updateTrainingDispatcher(training, this.props.trainingappmap.get('edittraining'), fileinput.files[0])


        // const registrationError = this.props.auth.get('registrationError')
        // const usernamevalid = registrationError.get('username')!==''?'is-invalid':''
        // // if (registrationError.get('username') !== ''){
        // console.log('Registeration. add valid ' + usernamevalid)
        // usernameref.addClass(usernamevalid)

        // const registrationError = this.props.auth.get('registrationError')
        // if (registrationError.get('username') !== ''){
        //   usernameref.addClass('is-invalid')
        //   // const usernameerror = usernameref.find('.mdl-textfield__error')
        //   // usernameerror[0].value = 'Waaaak wak'
        //   return
        // }else{
        //   console.log('Registeration. Remove invalid')
        //   usernameref.removeClass('is-invalid')
        // }
    }

    handleDelete(event) {
        event.preventDefault()
//    console.log('Delete Training')
        //this.props.actions.needDeleteTrainingConfirmation(true)
        this.props.actions.needActionConfirmation(true, this.props.actions.deleteEditTrainingDispatcher, {})
    }


}
