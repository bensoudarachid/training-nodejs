import React from 'react'
import cookie from 'react-cookie'
import ApiConnection from '../../../services/apiconnection'
import $ from 'jquery'

<<<<<<< HEAD
<<<<<<< HEAD
export default class TodoImage extends React.Component {
=======
export default
class TodoImage extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class TodoImage extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

    constructor(props) {
        super(props)
        this.state = {
            imageLoaded: undefined
        }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    // <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
=======
    // <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}
>>>>>>> 6e3ff02... webstorm big changes crash
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
    // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
    // {  isUploading && this.state.imageLoaded==undefined?
    // <div>HALLOOOOO</div>
    // :<div>weg</div>
    // }

<<<<<<< HEAD
    // <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
=======
    // <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}
>>>>>>> 6e3ff02... webstorm big changes crash
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

=======
>>>>>>> b06ef94... clean code, remove comments
    render() {
        const taskid = this.props.taskid
        const isUploading = this.props.isUploading

        const idToken = cookie.load('jwt')
        return (
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='imgwrapper' id={'imgwrap' + taskid}>
                <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                <img id={'todolistitemimg' + taskid} src='./images/0.png'
                     data-src={ApiConnection.apiurl + ApiConnection.appbasename + '/api/todo/img/' + taskid + '?access_token=' + idToken}
                     onLoad={this.handleImageLoaded.bind(this)}
                     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
=======
            <div className='imgwrapper' id={'imgwrap' + taskid} >
                <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                <img id={'todolistitemimg' + taskid} src='./images/0.png' data-src={ApiConnection.apiurl + ApiConnection.appbasename + '/api/todo/img/' + taskid + '?access_token=' + idToken}
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
            <div className='imgwrapper' id={'imgwrap' + taskid}>
                <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                <img id={'todolistitemimg' + taskid} src='./images/0.png'
                     data-src={ApiConnection.apiurl + ApiConnection.appbasename + '/api/todo/img/' + taskid + '?access_token=' + idToken}
                     onLoad={this.handleImageLoaded.bind(this)}
                     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </div>
        )
<<<<<<< HEAD
        // return (
        //     <div className='imgwrapper' id={'imgwrap'+taskid} >
        //     {  this.state.imageLoaded==undefined?
        //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
        //         :<div/>
        //     }
<<<<<<< HEAD
        //         <img id={'todolistitemimg'+taskid} src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
=======
        //         <img id={'todolistitemimg'+taskid} src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}
>>>>>>> 6e3ff02... webstorm big changes crash
        //             onLoad={this.handleImageLoaded.bind(this)}
        //             onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
        //     </div>
        // )
=======
>>>>>>> b06ef94... clean code, remove comments
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
//    console.log('++++++++++++++++ todoimage ++++++ componentDidMount ')
        // this.loadImage()
        // const taskid = this.props.taskid
        // var elm = $('#imgwrap'+taskid)
        // // var imgbg=elm.find('.imgbg')
        // var img=elm.find('.dataimg')
        // // var imgSpinner=elm.find('.mdl-spinner')
        // if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
        //   img[0].removeAttribute('src')
        //   img[0].setAttribute('src', img[0].getAttribute('data-src'))
        //   img[0].removeAttribute('data-src')
        //   this.setState({
        //     imageLoaded: undefined
        //   })
        // }        
    }

    componentDidUpdate() {
        // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        require('exports?componentHandler!material-design-lite/material.js').upgradeAllRegistered()
=======
        componentHandler.upgradeDom()
    }

    componentDidUpdate() {
        componentHandler.upgradeAllRegistered()
<<<<<<< HEAD
        // componentHandler.upgradeDom()
        // componentHandler.upgradeAllRegistered()
        // componentHandler.upgradeDom()
        // componentHandler.upgradeAllRegistered()
>>>>>>> 6e3ff02... webstorm big changes crash
//    console.log('++++++++++++++++ todoimage ++++++ componentDidUpdate '+this.props.isUploading)   
=======
>>>>>>> b06ef94... clean code, remove comments

        const taskid = this.props.taskid
        var elm = $('#imgwrap' + taskid)
        var image = elm.find('.dataimg')
        var img = image[0]


<<<<<<< HEAD
<<<<<<< HEAD
        if (this.props.isUploading == false) {//img is a jquery object img[0] is the dom object 
=======
        if (this.props.isUploading == false) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        if (this.props.isUploading == false) {
>>>>>>> b06ef94... clean code, remove comments
            const idToken = cookie.load('jwt')
            img.setAttribute('data-src', ApiConnection.apiurl + ApiConnection.appbasename + '/api/todo/img/' + taskid + '?access_token=' + idToken + '&rdparam=' + Math.floor(Math.random() * 10000))
        }
<<<<<<< HEAD
        // var imgSpinner=elm.find('.mdl-spinner')
<<<<<<< HEAD
        if (img.hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
        if (img.hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
            // img[0].removeAttribute('src')
=======
        if (img.hasAttribute('data-src')) {
>>>>>>> b06ef94... clean code, remove comments
            var imgSpinner = elm.find('.mdl-spinner')
            imgSpinner[0].style.display = 'block'
            img.style.display = 'none'
            img.setAttribute('src', img.getAttribute('data-src'))
            img.removeAttribute('data-src')
        }
    }

    handleImageLoaded() {
        const taskid = this.props.taskid
        var elm = $('#imgwrap' + taskid)
        var imgSpinner = elm.find('.mdl-spinner')

        var image = elm.find('.dataimg')
        var img = image[0]
        if (!img.hasAttribute('data-src')) {
            img.style.display = 'block'
            if (img.getAttribute('src') != './images/0.png')
                img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #69F 95%, transparent 100%)'
            imgSpinner[0].style.display = 'none'
        } else
            this.setState({imageLoaded: true})
    }

    handleImageErrored() {
        const taskid = this.props.taskid
        var elm = $('#imgwrap' + taskid)
        var imgSpinner = elm.find('.mdl-spinner')
        var image = elm.find('.dataimg')
        var img = image[0]
        imgSpinner[0].style.display = 'none'
        img.setAttribute('src', './images/0.png')

    }

    shouldComponentUpdate(nextProps, nextState) {
        const taskid = this.props.taskid
        var elm = $('#imgwrap' + taskid)
        var image = elm.find('.dataimg')
        var img = image[0]
        if (img.hasAttribute('data-src') || (this.props.isUploading && !img.hasAttribute('data-src'))) {
            return true
        }
        return false
    }

<<<<<<< HEAD
    // loadImage(){
    //   console.log('++++++++++++++++ todolistitem ++++++ imageload ')
    //   // console.log('++++++++++++++++ todolistitem ++++++ really loading now')
    //   const taskid = this.props.taskid
    //   var elm = $('#imgwrap'+taskid)
    //   // var imgbg=elm.find('.imgbg')
    //   var img=elm.find('.dataimg')
    //   // var imgSpinner=elm.find('.mdl-spinner')

<<<<<<< HEAD
    //   if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
    //   if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
    //     img[0].setAttribute('src', img[0].getAttribute('data-src'))
    //     img[0].onload = function() {
    //       img[0].removeAttribute('data-src')
    //       // imgSpinner.remove()
    //       this.setState({
    //         imageLoaded: true
    //       })
    //     }.bind(this)
    //     img[0].onerror = function() {
    //       img[0].setAttribute('src', './images/0.png')
    //       this.setState({
    //         imageLoaded: true
    //       })
    //     }.bind(this)
<<<<<<< HEAD
    //   }    
=======
    //   }
>>>>>>> 6e3ff02... webstorm big changes crash
    // }

=======
>>>>>>> b06ef94... clean code, remove comments
}