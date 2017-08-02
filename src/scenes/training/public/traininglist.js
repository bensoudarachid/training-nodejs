import React from 'react'
//import { ThreeBounce } from 'better-react-spinkit'
import Immutable from 'immutable'

import TrainingListItem from './traininglistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
    require('./traininglist.scss')
}

<<<<<<< HEAD
export default class TrainingList extends React.Component {
=======
export default
class TrainingList extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
    constructor(props) {
        super(props)
        // console.log('training list. Mixin in constructor')
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
    }

    // getItems() {
    //   if (this.props.trainings) {
    //     return this.props.trainings.filter(
<<<<<<< HEAD
    //       (item) => 
=======
    //       (item) =>
>>>>>>> 6e3ff02... webstorm big changes crash
    //         item.get('completed') && this.props.filterclosed ||
    //         !item.get('completed') && this.props.filteropen
    //     )
    //     // console.log('training list get items. render items. Size = '+listtrainings.size)
    //   }
    //   return Immutable.List([])
    // }

    renderItems() {
        var items = this.props.trainings
        // const props = _.omit(this.props, 'trainings');
        // console.log('training list. render items. Size = '+items.size)

        return items.map(
            (training, index) => {
                // console.log('training list. index = '+index)
                return <TrainingListItem ind={index} training={training} actions={this.props.actions}/>
            }
        )
    }

    render() {
        return (
            // key={'traininglist'+Math.random()}
            <div className='traininglist'>
<<<<<<< HEAD
                {this.props.trainings == undefined ?
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active'
                          style={{width: '55px', height: '55px'}}></span>
                    :
                    <div className='traininglistwrap mdl-grid mdl-grid--no-spacing'>
                        {this.renderItems()}
                    </div>
                }
=======
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
>>>>>>> 6e3ff02... webstorm big changes crash
            </div>
        )
    }

    renderTest() {
        // console.log('Hi there from List. Props: '+this.props);
        return (
            <span></span>
        )
    }
}

