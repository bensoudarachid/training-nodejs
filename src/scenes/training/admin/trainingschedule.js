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
<<<<<<< HEAD
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

=======
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        // this.saveEvents = this.saveEvents.bind(this)
        // this.state = {
        //     edittraining: undefined
        // }
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
    }

    render() {
        // console.log('training schedule render!')
        const {auth} = this.props
        const training = this.props.trainingappmap.get('edittraining')
        // console.log('TrainingSchedule render training '+require('util').inspect(training, false, null))
        if(!training)
            return (
                <span>
                </span>
            )
        console.log('TrainingSchedule render training events'+require('util').inspect(training.get('events'), false, null))
        // const confirmationActionFunction=this.props.trainingappmap.get('confirmationActionFunction')

//    console.log('training edit render. training='+require('util').inspect(training, false, null))
        const id = training == undefined ? '' : training.get('id')
//        console.log('################################### Training schedule render=' + require('util').inspect(id, false, null))

        if (!auth.get('isAuthenticated')) {
            console.log('TrainingSchedule render : SORRY. NOT AUTHENTICATED!')
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
        }
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
=======
            let date1 = new Date(2001, 0, 7, 10, 30, 0, 0)
            let date2 = new Date(2001, 0, 7, 12, 0, 0, 0)
            // date1.setDate(6)
            // date2.setDate(6)
            // date2.setHours(16)
            // let events = training != undefined?Immutable.List(training.events):Immutable.List([])

//             let events = Immutable.List([
//                 {
//                     'number': 1,
// //                    'title': 'React 1',
//                     // 'date': Date.now(),
//                     'start': date1,
//                     'end': date2
//                     // 'allDay': true
//                 },
//                 {
//                     'number': 2,
//                     // 'title': 'React 2',
//                     // 'date': Date.now(),
//                     'start': new Date(2001, 0, 2, 9, 30, 0, 0),
//                     'end': new Date(2001, 0, 2, 11, 30, 0, 0)
//                     // 'allDay': true
//                 }
//                 // ,{
//                 //     'number': 3,
//                 //     'start': new Date(2001, 0, 2, 14, 30, 0, 0),
//                 //     'end': new Date(2001, 0, 2, 16, 30, 0, 0)
//                 // },
//                 // {
//                 //     'number': 4,
//                 //     'start': new Date(2001, 0, 3, 10, 30, 0, 0),
//                 //     'end': new Date(2001, 0, 3, 12, 30, 0, 0)
//                 // },
//                 // {
//                 //     'number': 1,
//                 //     'start': new Date(2001, 0, 2, 8, 30, 0, 0),
//                 //     'end': new Date(2001, 0, 2, 10, 30, 0, 0)
//                 // },
//                 // {
//                 //     'number': 4,
//                 //     'start': new Date(2001, 0, 4, 10, 30, 0, 0),
//                 //     'end': new Date(2001, 0, 4, 14, 30, 0, 0)
//                 // }
//             ])
//             console.log('events='+require('util').inspect(events.toIndexedSeq().toArray(), false, null))

            return (
                <div className='trainingschedule blockborder'>
                    <BigCalendarEdit trainingappmap={this.props.trainingappmap} actions={this.props.actions}/>
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
                </div>
            )
        }
    }

    componentWillUnmount() {
        // this.props.actions.loadEditTraining(undefined)
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

    // This is a necessary call when component is fetched on server side
    static fetchData(actions, params) {
        console.log('Training list fetch data. Params = '+require('util').inspect(params, false, null))
        console.log('Training schedule. get training! param = '+util.inspect( params.id, false, null))

        //The return is necessary. if not the fetching is not resolved properly on the server side!
        return actions.retrieveTrainingDispatcher(params)
        // return Promise.resolve(actions.retrieveTrainingDispatcher(params.id,hostname))
    }

    componentDidUpdate() {
<<<<<<< HEAD
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash

=======
        console.log('training schedule update!')
        componentHandler.upgradeDom()
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
    }

}
