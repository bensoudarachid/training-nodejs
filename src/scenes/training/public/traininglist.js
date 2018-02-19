import React from 'react'

import TrainingListItem from './traininglistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './traininglist.scss'

export default class TrainingList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
    }

    renderItems() {
        var items = this.props.trainings

        return items.map(
            (training, index) => {
                return <TrainingListItem ind={index} training={training} actions={this.props.actions}/>
            }
        )
    }

    render() {
        return (
            <div className='traininglist'>
                {this.props.trainings == undefined ?
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{
                        width: '55px',
                        height: '55px'
                    }}></span>
                    :
                    <div className='traininglistwrap mdl-grid mdl-grid--no-spacing'>
                        {this.renderItems()}
                    </div>
                }
            </div>
        )
    }

    renderTest() {
        return (
            <span></span>
        )
    }
}

