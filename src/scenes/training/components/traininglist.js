import React from 'react'
//import { ThreeBounce } from 'better-react-spinkit'
import Immutable from 'immutable'

import TrainingListItem from './traininglistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
  require('./traininglist.scss')
}

export default class TrainingList extends React.Component {
  constructor(props) {
    super(props)
    // console.log('training list. Mixin in constructor')
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  
  componentDidMount(){
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
  }

  // getItems() {
  //   if (this.props.trainings) {
  //     return this.props.trainings.filter(
  //       (item) => 
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
    // console.log('Hi there from training list List. Props: '+this.props.trainings.size)
      // <div className="mdl-layout-spacer"></div>
    return (
      <div className='trainingslist'>
      {this.renderItems()}
      </div>
    )
  }
  renderNew() {
    // console.log('Hi there from List. Props: '+this.props);
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}
