import React from 'react'
//import { ThreeBounce } from 'better-react-spinkit'
import Immutable from 'immutable'

import AdminTrainingListItem from './admintraininglistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LogoSpinner from '../../../components/shared/logospinner'

if (process.env.BROWSER) {
  require('./admintraininglist.scss')
}

export default class AdminTrainingList extends React.Component {
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
        return <AdminTrainingListItem ind={index} training={training} actions={this.props.actions}/>
      }
    )
  }

      // <div className='trainingslist'>
      //     <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
      //       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><p>Heeee! The admin list</p></div>
      //     </div>
      // </div>
  render() {
    // console.log('Hi there from training list List. Props: '+this.props.trainings.size)
      // <div className="mdl-layout-spacer"></div>
    // const title = this.props.training.get('title')
    // if(this.props.trainings==undefined)
    //   return (
    //     <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' style={{width:'55px',height:'55px'}}></div>
    // )

          // <div style={{backgroundColor:'red',width:'55px',height:'55px'}}><LogoSpinner/></div>

    return (
      <div className='admintrainingslist'>
        {this.props.trainings==undefined?
          <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{width:'55px',height:'55px'}}></div>
          //<div className='spinnerwrap'><LogoSpinner/></div>
          :
          <span className='admintrainingslistwrap mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
            {this.renderItems()}
          </span>
        }        
      </div>
    )
  }
  // renderNew() {
  //   // console.log('Hi there from List. Props: '+this.props);
  //   return (
  //     <div>
  //       {this.renderItems()}
  //     </div>
  //   )
  // }
}

