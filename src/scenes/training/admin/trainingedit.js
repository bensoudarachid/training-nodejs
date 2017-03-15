import React from 'react'
// import _ from 'lodash'

if (process.env.BROWSER) {
  require('./trainingedit.scss')
}

export default class TrainingEdit extends React.Component {

  render() {
    console.log('trainingedit render')
    
    return (
        <h1>Training.... This page is under construction!</h1>
    )
  }
  

  componentDidMount() {
    console.log('trainingedit mounted')
    // TrainingEdit.fetchData(this.props.actions)
  }
  
  // static fetchData(actions) {
  //   console.log('Training edit. do nothing man!')
  // }


}
