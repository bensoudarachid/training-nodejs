import React from 'react';
import Immutable from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import FileUploadInput from '../../../components/shared/fileuploadinput';
// import TrainingImage from '../shared/trainingimage'
import AppImage from '../../../components/shared/appimage';
// import ConfirmationModal from './confirmationmodal'


// import _ from 'lodash'
var util = require('util');

if (process.env.BROWSER) {
  require('./trainingedit.scss');
}

export default class TrainingEdit extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      edittraining: undefined
    };
  }

  render() {
    //    console.log('trainingedit render!')
    const { auth } = this.props;
    const training = this.props.trainingappmap.get('edittraining');
    // const confirmationActionFunction=this.props.trainingappmap.get('confirmationActionFunction')

    //    console.log('training edit render. training='+require('util').inspect(training, false, null))
    const isTrainingEditFetching = this.props.trainingappmap.get('isTrainingEditFetching');
    const trainingEditError = this.props.trainingappmap.get('trainingEditError');
    const id = training == undefined ? '' : training.get('id');
    const title = training == undefined ? '' : training.get('title');
    // console.log('###################################Training edit render title ='+require('util').inspect(title, false, null))
    const secondaryTitle = training == undefined ? '' : training.get('secondaryTitle');
    const shortDescription = training == undefined ? '' : training.get('shortDescription');
    const longDescription = training == undefined ? '' : training.get('longDescription');
    const duration = training == undefined ? '' : training.get('duration');
    // const needDeleteConfirmation = training==undefined?'':training.get('needDeleteConfirmation')
    const needActionConfirmation = training == undefined ? '' : training.get('needDeleteConfirmation');

    const error = training == undefined ? '' : training.get('error');
    const errorClass = error ? 'error' : '';
    let saving = training == undefined ? '' : training.get('saving');
    if (saving == undefined) saving = false;
    // const isUploading = false
    const disabled = saving ? 'disabled' : '';
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

    if (!auth.get('isAuthenticated')) return React.createElement(
      'span',
      null,
      React.createElement(
        'h1',
        null,
        'Needs authentication'
      )
    );else if (training == undefined) return React.createElement(
      'span',
      null,
      React.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap', style: { width: '55px', height: '55px' } })
    );else
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

      return React.createElement(
        'div',
        { className: 'trainingedit blockborder' },
        React.createElement(
          'form',
          { onSubmit: event => this.handleSave(event), noValidate: true },
          React.createElement(
            'span',
            { className: 'mdl-grid mdl-grid--no-spacing' },
            React.createElement(
              'span',
              { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
              React.createElement(
                'div',
                { className: errorClass },
                error
              )
            ),
            React.createElement(
              'span',
              { className: 'mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
              React.createElement(AppImage, { api: 'training', imgid: id, isUploading: saving })
            ),
            React.createElement(
              'span',
              { className: 'mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone fileuploadinput' },
              React.createElement(FileUploadInput, { id: 'uploadfile-' + id, disabled: disabled, actions: this.props.actions })
            ),
            React.createElement(
              'span',
              { className: 'mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone' },
              React.createElement(
                'span',
                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                React.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'title', type: 'text', id: 'title', name: 'title', value: title, onChange: event => this.handleTitleChange(event), disabled: saving }),
                React.createElement(
                  'label',
                  { className: 'mdl-textfield__label', htmlFor: 'title' },
                  'Title'
                ),
                React.createElement(
                  'span',
                  { className: 'mdl-textfield__error', htmlFor: 'title' },
                  trainingEditError.get('title')
                )
              )
            ),
            React.createElement(
              'span',
              { className: 'mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' },
              React.createElement(
                'span',
                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                React.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'secondaryTitle', type: 'text', id: 'secondaryTitle', name: 'secondaryTitle', value: secondaryTitle, onChange: event => this.handleSecondaryTitleChange(event), disabled: saving }),
                React.createElement(
                  'label',
                  { className: 'mdl-textfield__label', htmlFor: 'secondaryTitle' },
                  'Secondary title'
                ),
                React.createElement(
                  'span',
                  { className: 'mdl-textfield__error', htmlFor: 'secondaryTitle' },
                  trainingEditError.get('secondaryTitle')
                )
              )
            ),
            React.createElement(
              'span',
              { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
              React.createElement(
                'span',
                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                React.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'shortDescription', type: 'text', id: 'shortDescription', name: 'shortDescription', value: shortDescription, onChange: event => this.handleShortDescriptionChange(event), disabled: saving }),
                React.createElement(
                  'label',
                  { className: 'mdl-textfield__label', htmlFor: 'shortDescription' },
                  'Short description'
                ),
                React.createElement(
                  'span',
                  { className: 'mdl-textfield__error', htmlFor: 'shortDescription' },
                  trainingEditError.get('shortDescription')
                )
              )
            ),
            React.createElement(
              'span',
              { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
              React.createElement(
                'span',
                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                React.createElement('textarea', { className: 'mdl-textfield__input ' + disabled, ref: 'longDescription', type: 'text', id: 'longDescription', name: 'longDescription', rows: '7', value: longDescription, onChange: event => this.handleLongDescriptionChange(event), disabled: saving }),
                React.createElement(
                  'label',
                  { className: 'mdl-textfield__label', htmlFor: 'longDescription' },
                  'Long Description'
                ),
                React.createElement(
                  'span',
                  { className: 'mdl-textfield__error', htmlFor: 'longDescription' },
                  trainingEditError.get('longDescription')
                )
              )
            )
          ),
          React.createElement('br', null),
          React.createElement(
            'div',
            { className: 'footer' },
            saving ? React.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' }) : React.createElement(
              'div',
              { key: 'trainingeditbuttonsarenotrerenderedproperlyaftersubmit' + Math.random() },
              React.createElement(
                'button',
                { id: 'sub', type: 'submit', className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                'Submit'
              ),
              React.createElement(
                'button',
                { id: 'deletetheshit', onClick: event => this.handleDelete(event), className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                'Delete'
              )
            )
          )
        )
      );
  }
  handleTitleChange(e) {
    this.props.actions.handleTrainingEditChange('title', e.target.value);
  }
  handleSecondaryTitleChange(e) {
    this.props.actions.handleTrainingEditChange('secondaryTitle', e.target.value);
  }
  handleShortDescriptionChange(e) {
    this.props.actions.handleTrainingEditChange('shortDescription', e.target.value);
  }
  handleLongDescriptionChange(e) {
    this.props.actions.handleTrainingEditChange('longDescription', e.target.value);
  }

  // componentWillMount(){
  //   TrainingEdit.fetchData(this.props.actions,this.props.params)
  //   // return Promise.resolve(TrainingEdit.fetchData(this.props.actions,this.props.params))
  // }

  componentWillUnmount() {
    this.props.actions.loadEditTraining(undefined);
  }

  componentDidMount() {
    componentHandler.upgradeDom();
    TrainingEdit.fetchData(this.props.actions, this.props.params);
  }

  //This is a necessary call when component is fetched on server side
  static fetchData(actions, params, hostname) {
    console.log('Call Training Edit fetch data  <-----------------------------');
    // console.log('Training edit. get training! param = '+util.inspect( params.id, false, null))

    //The return is necessary. if not the fetching is not resolved properly on the server side! 
    return actions.retrieveTrainingDispatcher(params, hostname);
    // return Promise.resolve(actions.retrieveTrainingDispatcher(params.id,hostname))
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
    const trainingEditError = this.props.trainingappmap.get('trainingEditError');
    // console.log('Training edit. comp update')
    //Need this code to get correct placeholderfloating  behaviour. otherwise content and placeholder overlap
    var dialogInputs = document.querySelectorAll('.mdl-textfield');
    for (var i = 0, l = dialogInputs.length; i < l; i++) {
      if (dialogInputs[i].MaterialTextfield != undefined)
        // console.log('Training edit. CALLING dialogInputs[i].MaterialTextfield.checkDirty()')
        dialogInputs[i].MaterialTextfield.checkDirty();
      // }else
      //   console.log('Training edit. NOOOOO dialogInputs[i].MaterialTextfield.checkDirty() call')
      if (trainingEditError.get(dialogInputs[i].MaterialTextfield.input_.id) !== undefined) dialogInputs[i].className += ' is-invalid';else {
        dialogInputs[i].className = dialogInputs[i].className.replace(' is-invalid', ' ');
      }
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return true
  // }

  handleSave(event) {
    console.log('Save Training ');
    event.preventDefault();
    // const usernameref = this.refs.username
    // const usernameref = $('#usernameid')
    // const usernameinput = usernameref.find('.mdl-textfield__input')
    // console.log('Registeration. '+usernameinput[0].value)
    const title = this.refs.title;
    // console.log('Register User: '+this.refs.username.value)
    const secondaryTitle = this.refs.secondaryTitle;
    const shortDescription = this.refs.shortDescription;
    const longDescription = this.refs.longDescription;
    // console.log('Register passwordcheck: '+this.refs.passwordCheck.value)
    const trainingid = this.props.trainingappmap.get('edittraining').get('id');
    var fileinput = document.querySelector('#uploadfile-' + trainingid);

    var training = {
      // username: usernameinput[0].value.trim(),
      title: title.value.trim(),
      secondaryTitle: secondaryTitle.value.trim(),
      shortDescription: shortDescription.value.trim(),
      longDescription: longDescription.value.trim()
    };
    training = this.props.trainingappmap.get('edittraining').merge(Immutable.Map(training));
    // console.log('Training edit. call update with this item: '+util.inspect(training, false, null))
    // this.props.actions.updateTraining(training)
    this.props.actions.updateTrainingDispatcher(training, this.props.trainingappmap.get('edittraining'), fileinput.files[0]);

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
    event.preventDefault();
    //    console.log('Delete Training')
    //this.props.actions.needDeleteTrainingConfirmation(true)
    this.props.actions.needActionConfirmation(true, this.props.actions.deleteEditTrainingDispatcher, {});
  }

}