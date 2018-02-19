import React from 'react'

import AdminTrainingListItem from './admintraininglistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './admintraininglist.scss'

export default class AdminTrainingList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
    }

    renderItems() {
        var items = this.props.trainings
        if (items == undefined)
            return <div/>
        return items.map(
            (training, index) => {
                return <AdminTrainingListItem ind={index} training={training} actions={this.props.actions}/>
            }
        )
    }

    render() {

        return (
            <div className='admintrainingslist'>
                {this.props.trainings == undefined ?
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap'
                          style={{
                              width: '55px',
                              height: '55px'
                          }}></span>
                    :
                    <div className='admintrainingslistwrap mdl-grid mdl-grid--no-spacing'>
                        {this.renderItems()}
                    </div>
                }
            </div>
        )
    }
}
