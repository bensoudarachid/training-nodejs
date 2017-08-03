import React from 'react'
import Immutable from 'immutable'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import FileUploadInput from '../../../components/shared/fileuploadinput'
// import TrainingImage from '../shared/trainingimage'
import AppImage from '../../../components/shared/appimage'
import BigCalendarEdit from '../../../components/shared/bigcalendaredit'
// import FullCalendarEdit from '../../../components/shared/fullcalendaredit'
// import ConfirmationModal from './confirmationmodal'


// import _ from 'lodash'
var util = require('util')

if (process.env.BROWSER) {
    require('./trainingschedule.scss')
}

export default class TrainingSchedule extends React.Component {

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

<<<<<<< HEAD
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

=======
>>>>>>> 6e3ff02... webstorm big changes crash
        this.state = {
            edittraining: undefined
        }

    }

    render() {
        console.log('training schedule render!')
        const {auth} = this.props
        const training = this.props.trainingappmap.get('edittraining')
        // const confirmationActionFunction=this.props.trainingappmap.get('confirmationActionFunction')

//    console.log('training edit render. training='+require('util').inspect(training, false, null))
        const id = training == undefined ? '' : training.get('id')
        console.log('###################################Training schedule render=' + require('util').inspect(id, false, null))

        if (!auth.get('isAuthenticated'))
            return (
                <span>
<<<<<<< HEAD
          <h1>Needs authentication</h1>
        </span>
=======
                    <h1>Needs authentication</h1>
                </span>
>>>>>>> 6e3ff02... webstorm big changes crash
            )
        // else if( training==undefined )
        //   return (
        //     <span>
        //       <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' style={{width:'55px',height:'55px'}}></span>
        //     </span>
        //   )
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
        {
<<<<<<< HEAD
=======
            let date1 = new Date(2001, 0, 2, 10, 30, 0, 0)
            let date2 = new Date(2001, 0, 2, 12, 30, 0, 0)
            date1.setDate(6)
            date2.setDate(6)
            date2.setHours(16)

>>>>>>> 6e3ff02... webstorm big changes crash
            let events = Immutable.List([
                {
                    'id': 1,
                    'title': 'React 1',
                    // 'date': Date.now(),
<<<<<<< HEAD
                    'start': new Date(2001, 0, 2, 10, 30, 0, 0),
                    'end': new Date(2001, 0, 2, 12, 30, 0, 0),
=======
                    'start': date1,
                    'end': date2
>>>>>>> 6e3ff02... webstorm big changes crash
                    // 'allDay': true
                },
                {
                    'id': 2,
                    'title': 'React 2',
                    // 'date': Date.now(),
                    'start': new Date(2001, 0, 4, 14, 30, 0, 0),
<<<<<<< HEAD
                    'end': new Date(2001, 0, 4, 16, 30, 0, 0),
=======
                    'end': new Date(2001, 0, 4, 16, 30, 0, 0)
>>>>>>> 6e3ff02... webstorm big changes crash
                    // 'allDay': true
                }
            ])

            return (
                <div className='trainingschedule blockborder'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <BigCalendarEdit events={events}/>
=======
                    <BigCalendarEdit events = {events} />
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                    <BigCalendarEdit events={events}/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                </div>
            )
        }

    }

    componentWillUnmount() {
        this.props.actions.loadEditTraining(undefined)
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        // console.log('this.props.location.pathname='+require('util').inspect(this.props.location.pathname, false, null))
        // if( !this.props.location.pathname=='trainings/item/new')
        TrainingSchedule.fetchData(this.props.actions, this.props.params)

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
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash

    }


}
