import React from 'react'
import BigCalendarEdit from '../../../components/shared/bigcalendaredit'


var util = require('util')

if (process.env.BROWSER) {
    require('./trainingschedule.scss')
}

export default class TrainingSchedule extends React.Component {

    constructor(props) {
        super(props)
<<<<<<< HEAD
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
=======
    }

    static fetchData(actions, params) {
        console.log('Training list fetch data. Params = ' + require('util').inspect(params, false, null))
        console.log('Training schedule. get training! param = ' + util.inspect(params.id, false, null))

        return actions.retrieveTrainingDispatcher(params)
>>>>>>> b06ef94... clean code, remove comments
    }

    render() {
        const {auth} = this.props
        const training = this.props.trainingappmap.get('edittraining')
        if (!training)
            return (
                <span>
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap'
                          style={{
                              width: '55px',
                              height: '55px'
                          }}></span>
                </span>
            )

        const id = training == undefined ? '' : training.get('id')

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
<<<<<<< HEAD
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
=======
        else {
>>>>>>> b06ef94... clean code, remove comments
            let date1 = new Date(2001, 0, 7, 10, 30, 0, 0)
            let date2 = new Date(2001, 0, 7, 12, 0, 0, 0)


            return (
                <div className='trainingschedule blockborder'>
                    <BigCalendarEdit trainingappmap={this.props.trainingappmap} actions={this.props.actions}/>
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
                </div>
            )
        }
    }

    componentWillUnmount() {
        console.log('Training schedule componentWillUnmount')
        this.props.actions.loadEditTraining(undefined)
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
<<<<<<< HEAD
>>>>>>> 6e3ff02... webstorm big changes crash
        // console.log('this.props.location.pathname='+require('util').inspect(this.props.location.pathname, false, null))
        // if( !this.props.location.pathname=='trainings/item/new')
=======
>>>>>>> b06ef94... clean code, remove comments
        TrainingSchedule.fetchData(this.props.actions, this.props.params)
    }

    componentDidUpdate() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash

=======
        console.log('training schedule update!')
=======
//        console.log('training schedule update!')
>>>>>>> 5481451... Visual feedback about login-in-progress
=======
>>>>>>> b06ef94... clean code, remove comments
        componentHandler.upgradeDom()
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
    }

}
