import React from 'react'
import BigCalendarEdit from 'components/shared/bigcalendaredit'
import './trainingschedule.scss'
import util from 'util'


export default class TrainingSchedule extends React.Component {

    constructor(props) {
        super(props)
    }

    static fetchData(actions, params) {
        console.log('Training list fetch data. Params = ' + require('util').inspect(params, false, null))
        console.log('Training schedule. get training! param = ' + util.inspect(params.id, false, null))

        return actions.retrieveTrainingDispatcher(params)
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
                    <h1>Needs authentication</h1>
                </span>
            )
        }
        else {
            let date1 = new Date(2001, 0, 7, 10, 30, 0, 0)
            let date2 = new Date(2001, 0, 7, 12, 0, 0, 0)


            return (
                <div className='trainingschedule blockborder'>
                    <BigCalendarEdit trainingappmap={this.props.trainingappmap} actions={this.props.actions}/>
                </div>
            )
        }
    }

    componentWillUnmount() {
        console.log('Training schedule componentWillUnmount')
        this.props.actions.loadEditTraining(undefined)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
        TrainingSchedule.fetchData(this.props.actions, this.props.params)
    }

    componentDidUpdate() {
        componentHandler.upgradeDom()
    }

}
