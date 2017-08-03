import React from 'react'
import cookie from 'react-cookie'
// import actions from '../../../services/actions'
import ApiConnection from '../../../services/apiconnection'
import $ from 'jquery'


if (process.env.BROWSER) {
    require('./trainingimage.scss')
}

export default class TrainingImage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLoaded: undefined
        }
    }

<<<<<<< HEAD
    // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}           
=======
    // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}
>>>>>>> 6e3ff02... webstorm big changes crash
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
    // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
    // {  isUploading && this.state.imageLoaded==undefined?
    // <div>HALLOOOOO</div>
    // :<div>weg</div>
    // }

<<<<<<< HEAD
    // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}           
=======
    // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}
>>>>>>> 6e3ff02... webstorm big changes crash
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

    render() {
        // console.log('todimage. render now')
        const trainingid = this.props.trainingid
        const isUploading = this.props.isUploading
        console.log('trainingimage render. isUploading ' + isUploading)
        // console.log('trainingimage render. this.state.imageLoaded '+this.state.imageLoaded )
        // if( isUploading == false){
        //   const trainingid = this.props.trainingid
        //   var elm = $('#imgwrap'+trainingid)
        //   var image=elm.find('.dataimg')
        //   var img = image[0]
        //   img.setAttribute('data-src', ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken+'&param='+ Math.floor(Math.random() * 10000))
        // }

        const idToken = cookie.load('jwt')
        return (
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='imgwrapper' id={'imgwrap' + trainingid}>
                <div className='spinnerwrap'>
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                </div>
                <img id={'traininglistitemimg' + trainingid} src='./images/0.png'
                     data-src={ApiConnection.apiurl + '/api/training/img/' + trainingid + '?access_token=' + idToken}
                     onLoad={this.handleImageLoaded.bind(this)}
                     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
=======
            <div className='imgwrapper' id={'imgwrap' + trainingid} >
                <div className='spinnerwrap'>
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                </div>
                <img id={'traininglistitemimg' + trainingid} src='./images/0.png' data-src={ApiConnection.apiurl + '/api/training/img/' + trainingid + '?access_token=' + idToken}
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
            <div className='imgwrapper' id={'imgwrap' + trainingid}>
                <div className='spinnerwrap'>
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                </div>
                <img id={'traininglistitemimg' + trainingid} src='./images/0.png'
                     data-src={ApiConnection.apiurl + '/api/training/img/' + trainingid + '?access_token=' + idToken}
                     onLoad={this.handleImageLoaded.bind(this)}
                     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </div>
        )
        // return (
        //     <div className='imgwrapper' id={'imgwrap'+trainingid} >
        //     {  this.state.imageLoaded==undefined?
        //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
        //         :<div/>
        //     }
<<<<<<< HEAD
        //         <img id={'traininglistitemimg'+trainingid} src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}           
=======
        //         <img id={'traininglistitemimg'+trainingid} src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}
>>>>>>> 6e3ff02... webstorm big changes crash
        //             onLoad={this.handleImageLoaded.bind(this)}
        //             onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
        //     </div>
        // )
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
        // componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        // console.log('++++++++++++++++ trainingimage ++++++ componentDidMount ')
        // this.loadImage()
        // const trainingid = this.props.trainingid
        // var elm = $('#imgwrap'+trainingid)
        // // var imgbg=elm.find('.imgbg')
        // var img=elm.find('.dataimg')
        // // var imgSpinner=elm.find('.mdl-spinner')
<<<<<<< HEAD
        // if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
        // if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
        //   img[0].removeAttribute('src')
        //   img[0].setAttribute('src', img[0].getAttribute('data-src'))
        //   img[0].removeAttribute('data-src')
        //   this.setState({
        //     imageLoaded: undefined
        //   })
<<<<<<< HEAD
        // }        
    }

    componentDidUpdate() {
        // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        require('exports?componentHandler!material-design-lite/material.js').upgradeAllRegistered()
        // console.log('++++++++++++++++ trainingimage ++++++ componentDidUpdate '+this.props.isUploading)   
=======
        // }
    }

    componentDidUpdate() {
        // componentHandler.upgradeDom()
        componentHandler.upgradeAllRegistered()
        // console.log('++++++++++++++++ trainingimage ++++++ componentDidUpdate '+this.props.isUploading)
>>>>>>> 6e3ff02... webstorm big changes crash

        const trainingid = this.props.trainingid
        var elm = $('#imgwrap' + trainingid)
        // var imgbg=elm.find('.imgbg')
        var image = elm.find('.dataimg')
        // var image=$('#traininglistitemimg'+trainingid)
        var img = image[0]
        // var img = document.getElementById('traininglistitemimg'+trainingid)
        // console.log('++++++++++++++++ trainingimage ++++++ componentDidUpdate go into if has attrib data src: '+img.hasAttribute('data-src'))


<<<<<<< HEAD
        if (this.props.isUploading == false) {//img is a jquery object img[0] is the dom object 
=======
        if (this.props.isUploading == false) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
            const idToken = cookie.load('jwt')
            // img[0].removeAttribute('src')
            img.setAttribute('data-src', ApiConnection.apiurl + '/api/training/img/' + trainingid + '?access_token=' + idToken + '&rdparam=' + Math.floor(Math.random() * 10000))
        }
        // var imgSpinner=elm.find('.mdl-spinner')
<<<<<<< HEAD
        if (img.hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
        if (img.hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
            // img[0].removeAttribute('src')
            var imgSpinner = elm.find('.mdl-spinner')
            // imgSpinner.remove()
            imgSpinner[0].style.display = 'block'
            img.style.display = 'none'
            img.setAttribute('src', img.getAttribute('data-src'))
            img.removeAttribute('data-src')
            // console.log('++++++++++++++++ trainingimage ++++++ componentDidUpdate setstate to true')
        }
    }


    handleImageLoaded() {
        // console.log('trainingimage handleImageLoaded ')
        const trainingid = this.props.trainingid
        var elm = $('#imgwrap' + trainingid)
        var imgSpinner = elm.find('.mdl-spinner')

        var image = elm.find('.dataimg')
        var img = image[0]
        if (!img.hasAttribute('data-src')) {
            // this.props.imageLoaded = true
            // imgSpinner.remove()
            // console.log('++++++++++++++++ trainingimage ++++++ handleImageLoaded set background now' )
            img.style.display = 'block'
            if (img.getAttribute('src') != './images/0.png')
                img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #69F 95%, transparent 100%)'
            imgSpinner[0].style.display = 'none'
        } else
            this.setState({imageLoaded: true})
    }

    handleImageErrored() {
        // console.log('trainingimage handleImageErrored ')
        const trainingid = this.props.trainingid
        var elm = $('#imgwrap' + trainingid)
        var imgSpinner = elm.find('.mdl-spinner')
        var image = elm.find('.dataimg')
        var img = image[0]
        imgSpinner[0].style.display = 'none'
        img.setAttribute('src', './images/0.png')

        // this.setState({ imageLoaded: false })
        // this.props.imageLoaded = false
    }

    shouldComponentUpdate(nextProps, nextState) {

        const isUploading = this.props.isUploading
        if (isUploading)
            return false
        const trainingid = this.props.trainingid
        var elm = $('#imgwrap' + trainingid)
        // var imgSpinner=elm.find('.mdl-spinner')
        var image = elm.find('.dataimg')
        var img = image[0]
        // console.log('++++++++++++++++ trainingimage ++++++ img.hasAttribute(data-src): '+ img.hasAttribute('data-src')+', id: '+trainingid+'  this.props.isUploading: '+ this.props.isUploading)
        if (img.hasAttribute('data-src') || (this.props.isUploading && !img.hasAttribute('data-src'))) {
            // if (!this.props.isUploading) {
            console.log('-------------------++++++++++++++++ training image render')
            return true
        }
        return false
    }

    // loadImage(){
    //   console.log('++++++++++++++++ traininglistitem ++++++ imageload ')
    //   // console.log('++++++++++++++++ traininglistitem ++++++ really loading now')
    //   const trainingid = this.props.trainingid
    //   var elm = $('#imgwrap'+trainingid)
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

}