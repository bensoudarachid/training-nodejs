import React from 'react'
import cookie from 'react-cookie'
// import actions from '../services/actions'
import ApiConnection from '../services/apiconnection'
import $ from 'jquery'

export default
class TodoImage extends React.Component {

    render() {
        const taskid = this.props.taskid
        const idToken = cookie.load('jwt')
// 	console.log(this.props)
//  <p>A little bit about {this.props.params.name}!!I like {this.props.location.query.food}!</p>
        return (
<<<<<<< HEAD
            <div className='imgwrap' id={'imgwrap' + taskid}>
                <img id={'todolistitemimg' + taskid}
                     src={ApiConnection.apiurl + '/api/todo/img/' + taskid + '?access_token=' + idToken}
                     className='dataimg' alt='coding'/>
=======
            <div className='imgwrap' id={'imgwrap' + taskid} >
                <img id={'todolistitemimg' + taskid} src={ApiConnection.apiurl + '/api/todo/img/' + taskid + '?access_token=' + idToken} className='dataimg' alt='coding'/>
>>>>>>> 6e3ff02... webstorm big changes crash
            </div>
        )
    }

    componentDidMount() {
<<<<<<< HEAD
        // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        // componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        this.loadImage()
    }

    loadImage() {
        console.log('++++++++++++++++ todolistitem ++++++ imageload ')
        // const loadImages = this.props.loadimages
<<<<<<< HEAD
        // if( !loadImages) 
=======
        // if( !loadImages)
>>>>>>> 6e3ff02... webstorm big changes crash
        //   return
        // console.log('++++++++++++++++ todolistitem ++++++ really loading now')
        // const taskid = this.props.get('taskid')
        // var elm = $('#imgwrap'+taskid)
        // // var imgbg=elm.find('.imgbg')
        // var img=elm.find('.dataimg')
        // // var imgSpinner=elm.find('.mdl-spinner')

<<<<<<< HEAD
        // if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
        // if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
        //   img[0].setAttribute('src', img[0].getAttribute('data-src'))
        //   img[0].onload = function() {
        //     img[0].removeAttribute('data-src')
        //     // imgSpinner.remove()
        //     this.setState({
        //       imageLoaded: true
        //     })

        //   }.bind(this)
<<<<<<< HEAD
        // }    
=======
        // }
>>>>>>> 6e3ff02... webstorm big changes crash
    }

}