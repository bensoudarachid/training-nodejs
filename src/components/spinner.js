import React from 'react'


export default class Spinner extends React.Component {
  render() {
// console.log(this.props)
//        <p>A little bit about {this.props.params.name}!!I like {this.props.location.query.food}!</p>
    return (
       <div className='mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active'></div>
    )
  }
  componentDidMount() {
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
  }
}