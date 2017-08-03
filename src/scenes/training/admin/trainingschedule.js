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
                    <h1>Needs authentication</h1>
                </span>
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
            let date1 = new Date(2001, 0, 2, 10, 30, 0, 0)
            let date2 = new Date(2001, 0, 2, 12, 30, 0, 0)
            date1.setDate(6)
            date2.setDate(6)
            date2.setHours(16)

            let events = Immutable.List([
                {
                    'id': 1,
                    'title': 'React 1',
                    // 'date': Date.now(),
                    'start': date1,
                    'end': date2
                    // 'allDay': true
                },
                {
                    'id': 2,
                    'title': 'React 2',
                    // 'date': Date.now(),
                    'start': new Date(2001, 0, 4, 14, 30, 0, 0),
                    'end': new Date(2001, 0, 4, 16, 30, 0, 0)
                    // 'allDay': true
                }
            ])

            return (
                <div className='trainingschedule blockborder'>
                    <BigCalendarEdit events={events}/>
                </div>
            )
        }

    }

    componentWillUnmount() {
        this.props.actions.loadEditTraining(undefined)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
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
        componentHandler.upgradeDom()

    }


}
