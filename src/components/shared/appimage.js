import React from 'react'
import cookie from 'react-cookie'
import ApiConnection from '../../services/apiconnection'
import $ from 'jquery'

if (process.env.BROWSER) {
    require('./appimage.scss')
}

export default class AppImage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLoaded: undefined
        }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    // <img id={'applicationlistitemimg'+imgid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}           
=======
    // <img id={'applicationlistitemimg'+imgid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}
>>>>>>> 6e3ff02... webstorm big changes crash
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
    // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
    // {  isUploading && this.state.imageLoaded==undefined?
    // <div>HALLOOOOO</div>
    // :<div>weg</div>
    // }

<<<<<<< HEAD
    // <img id={'applicationlistitemimg'+imgid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}           
=======
    // <img id={'applicationlistitemimg'+imgid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}
>>>>>>> 6e3ff02... webstorm big changes crash
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

=======
>>>>>>> b06ef94... clean code, remove comments
    render() {
        const training = this.props.training
        var isUploading = this.props.isUploading
        isUploading = isUploading == undefined ? false : true

        const imgid = this.props.imgid
        const api = this.props.api

        var elm = $('#imgwrap' + imgid)
        const width = elm.width()
        const height = elm.height()


        const idToken = cookie.load('jwt')
        const idTokenParam = idToken == undefined ? '' : '&access_token=' + idToken
        var datasrc = ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/'
        if (imgid != undefined)
            datasrc += 'img/' + imgid
        datasrc += '?width=' + width + '&height=' + height + '' + idTokenParam
        console.log('app image datasrc=' + require('util').inspect(datasrc, false, null))
        return (
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='imgwrapper' id={'imgwrap' + imgid}>
                <div className='spinnerwrap'>
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                </div>
                <img id={'applicationimg' + imgid} src='./images/0.png'
                     data-src={datasrc}
                     onLoad={this.handleImageLoaded.bind(this)}
                     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
=======
            <div className='imgwrapper' id={'imgwrap' + imgid} >
                <div className='spinnerwrap'>
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                </div>
                <img id={'applicationimg' + imgid} src='./images/0.png' data-src={ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/img/' + imgid + '?width=' + width + '&height=' + height + '' + idTokenParam}
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
            <div className='imgwrapper' id={'imgwrap' + imgid}>
                <div className='spinnerwrap'>
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                </div>
                <img id={'applicationimg' + imgid} src='./images/0.png'
                     data-src={ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/img/' + imgid + '?width=' + width + '&height=' + height + '' + idTokenParam}
                     onLoad={this.handleImageLoaded.bind(this)}
                     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </div>
        )
<<<<<<< HEAD
        // return (
        //     <div className='imgwrapper' id={'imgwrap'+imgid} >
        //     {  this.state.imageLoaded==undefined?
        //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
        //         :<div/>
        //     }
<<<<<<< HEAD
        //         <img id={'applicationlistitemimg'+imgid} src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}           
=======
        //         <img id={'applicationlistitemimg'+imgid} src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}
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
=======
        componentHandler.upgradeDom()
<<<<<<< HEAD
        // componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        // console.log('++++++++++++++++ applicationimage ++++++ componentDidMount ')
        // this.loadImage()
        // const imgid = this.props.imgid
        // var elm = $('#imgwrap'+imgid)
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
        // console.log('++++++++++++++++ applicationimage ++++++ componentDidUpdate '+this.props.isUploading)   
=======
        // }
=======
>>>>>>> b06ef94... clean code, remove comments
    }

    componentDidUpdate() {
        componentHandler.upgradeAllRegistered()
<<<<<<< HEAD
        // console.log('++++++++++++++++ applicationimage ++++++ componentDidUpdate '+this.props.isUploading)
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments

        const imgid = this.props.imgid
        const api = this.props.api

        var elm = $('#imgwrap' + imgid)
        const width = Math.floor(elm.width())
        const height = Math.floor(elm.height())

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
            const idTokenParam = idToken == undefined ? '' : '&access_token=' + idToken
            img.setAttribute('data-src', ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/img/' + imgid + '?width=' + width + '&height=' + height + '' + idTokenParam + '&rdparam=' + Math.floor(Math.random() * 10000))
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
        const imgid = this.props.imgid
        var elm = $('#imgwrap' + imgid)
        var imgSpinner = elm.find('.mdl-spinner')

        var image = elm.find('.dataimg')
        var img = image[0]
        if (!img.hasAttribute('data-src')) {
            img.style.display = 'block'
            if (img.getAttribute('src') != './images/0.png')
                img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #d7e7f4 95%, transparent 100%)'
            imgSpinner[0].style.display = 'none'
        } else
            this.setState({imageLoaded: true})
    }

    handleImageErrored() {
        const imgid = this.props.imgid
        var elm = $('#imgwrap' + imgid)
        var imgSpinner = elm.find('.mdl-spinner')
        var image = elm.find('.dataimg')
        var img = image[0]
        imgSpinner[0].style.display = 'none'
        img.setAttribute('src', './images/0.png')

    }

    shouldComponentUpdate(nextProps, nextState) {

        var isUploading = this.props.isUploading
        if (isUploading == undefined)
            return false
        const imgid = this.props.imgid
        var elm = $('#imgwrap' + imgid)
        var image = elm.find('.dataimg')
        var img = image[0]
        if (img.hasAttribute('data-src') || (this.props.isUploading && !img.hasAttribute('data-src'))) {
            return true
        }
        return false
    }

<<<<<<< HEAD
    // loadImage(){
    //   console.log('++++++++++++++++ applicationlistitem ++++++ imageload ')
    //   // console.log('++++++++++++++++ applicationlistitem ++++++ really loading now')
    //   const imgid = this.props.imgid
    //   var elm = $('#imgwrap'+imgid)
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