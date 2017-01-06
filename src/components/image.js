import React from 'react'
import cookie from 'react-cookie'
import actions from '../redux/actions'
import $ from 'jquery'

export default class TodoImage extends React.Component {

  render() {
    const taskid = this.props.taskid
    const idToken = cookie.load('jwt')
// 	console.log(this.props)
//  <p>A little bit about {this.props.params.name}!!I like {this.props.location.query.food}!</p>
    return (
		<div className='imgwrap' id={'imgwrap'+taskid} >
			<img id={'todolistitemimg'+taskid} src={actions.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken} className='dataimg' alt='coding'/>
		</div>
    )
  }

  componentDidMount() {
    // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    this.loadImage()
  }

  loadImage(){
    console.log('++++++++++++++++ todolistitem ++++++ imageload ')
    // const loadImages = this.props.loadimages
    // if( !loadImages) 
    //   return
    // console.log('++++++++++++++++ todolistitem ++++++ really loading now')
    // const taskid = this.props.get('taskid')
    // var elm = $('#imgwrap'+taskid)
    // // var imgbg=elm.find('.imgbg')
    // var img=elm.find('.dataimg')
    // // var imgSpinner=elm.find('.mdl-spinner')

    // if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
    //   img[0].setAttribute('src', img[0].getAttribute('data-src'))
    //   img[0].onload = function() {
    //     img[0].removeAttribute('data-src')
    //     // imgSpinner.remove()
    //     this.setState({
    //       imageLoaded: true
    //     })

    //   }.bind(this)
    // }    
  }

}