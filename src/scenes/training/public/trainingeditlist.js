import React from 'react'
//import { ThreeBounce } from 'better-react-spinkit'
import Immutable from 'immutable'

import TrainingEditListItem from './trainingeditlistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
  require('./trainingeditlist.scss')
}

export default class TrainingEditList extends React.Component {
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
        return <TrainingEditListItem ind={index} training={training} actions={this.props.actions}/>
      }
    )
  }

  render() {
    return (
      <div className='trainingslist'>
        {this.props.trainings==undefined?
             <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{width:'55px',height:'55px'}}></div>
           :
             <span>{this.renderItems()}</span>
        }        
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

