import React from 'react'
import cookie from 'react-cookie'
import ApiConnection from '../services/apiconnection'

export default class TodoImage extends React.Component {

    render() {
        const taskid = this.props.taskid
        const idToken = cookie.load('jwt')
        return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            <div className='imgwrap' id={'imgwrap' + taskid}>
                <img id={'todolistitemimg' + taskid}
                     src={ApiConnection.apiurl + '/api/todo/img/' + taskid + '?access_token=' + idToken}
                     className='dataimg' alt='coding'/>
<<<<<<< HEAD
=======
            <div className='imgwrap' id={'imgwrap' + taskid} >
                <img id={'todolistitemimg' + taskid} src={ApiConnection.apiurl + '/api/todo/img/' + taskid + '?access_token=' + idToken} className='dataimg' alt='coding'/>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </div>
        )
    }

    componentDidMount() {
<<<<<<< HEAD
<<<<<<< HEAD
        // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        // componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments
        this.loadImage()
    }

    loadImage() {
<<<<<<< HEAD
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
=======
        // console.log('++++++++++++++++ todolistitem ++++++ imageload ')
>>>>>>> b06ef94... clean code, remove comments
    }

}