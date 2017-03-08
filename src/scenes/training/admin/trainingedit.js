import React from 'react'
// import _ from 'lodash'

if (process.env.BROWSER) {
  require('./trainingedit.scss')
}

export default class TrainingEdit extends React.Component {

  render() {
    return (
        <h1>Training.... This page is under construction! yes</h1>
    )
  }
  

  componentDidMount() {
    // console.log('trainingappjs mounted')
    // TrainingEdit.fetchData(this.props.actions)
  }
  
  // static fetchData(actions) {
  //   console.log('Training edit. do nothing man!')
  // }


}
