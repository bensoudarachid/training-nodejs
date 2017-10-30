import React from 'react'
import cookie from 'react-cookie'
// import actions from '../../../services/actions'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import ApiConnection from '../../services/apiconnection'
import $ from 'jquery'


if (process.env.BROWSER) {
    require('./appimage.scss')
}

export default class AppImage extends React.Component {

    constructor(props) {
        super(props)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            imageLoaded: undefined
        }
    }

    // <img id={'applicationlistitemimg'+imgid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
    // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
    // {  isUploading && this.state.imageLoaded==undefined?
    // <div>HALLOOOOO</div>
    // :<div>weg</div>
    // }

    // <img id={'applicationlistitemimg'+imgid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

    render() {
        const training = this.props.training
        // const isUploading = training==undefined?'':training.get('saving')
        var isUploading = this.props.isUploading
        isUploading = isUploading == undefined ? false : true

        // console.log('ooooooooooooooooooooooooooooooooo ------ appimage. render now. isUploading '+isUploading )
        const imgid = this.props.imgid
        const api = this.props.api
        // const width = this.props.width
        // const height = this.props.height

        var elm = $('#imgwrap' + imgid)
        // var imgbg=elm.find('.imgbg')
        // console.log('----elm.style.width='+require('util').inspect(elm.width(), false, null))
        // console.log('----elm.style.height='+require('util').inspect(elm.height(), false, null))
        const width = elm.width()
        const height = elm.height()

        // const isUploading  = this.props.isUploading
        // console.log('applicationimage render. isUploading '+isUploading )
        // console.log('applicationimage render. this.state.imageLoaded '+this.state.imageLoaded )
        // if( isUploading == false){
        //   const imgid = this.props.imgid
        //   var elm = $('#imgwrap'+imgid)
        //   var image=elm.find('.dataimg')
        //   var img = image[0]
        //   img.setAttribute('data-src', ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken+'&param='+ Math.floor(Math.random() * 10000))
        // }

        const idToken = cookie.load('jwt')
        const idTokenParam = idToken == undefined ? '' : '&access_token=' + idToken
        // console.log('app image idTokenParam=' + require('util').inspect(idTokenParam, false, null))
        // datasrc += ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/img/' + imgid + '?width=' + width + '&height=' + height + '' + idTokenParam
        var datasrc = ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/'
        if( imgid!=undefined )
            datasrc += 'img/' + imgid
        datasrc += '?width=' + width + '&height=' + height + '' + idTokenParam
        console.log('app image datasrc='+require('util').inspect(datasrc, false, null))
        return (
            <div className='imgwrapper' id={'imgwrap' + imgid}>
                <div className='spinnerwrap'>
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                </div>
                <img id={'applicationimg' + imgid} src='./images/0.png'
                     data-src={datasrc}
                     onLoad={this.handleImageLoaded.bind(this)}
                     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
            </div>
        )
        // return (
        //     <div className='imgwrapper' id={'imgwrap'+imgid} >
        //     {  this.state.imageLoaded==undefined?
        //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
        //         :<div/>
        //     }
        //         <img id={'applicationlistitemimg'+imgid} src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}
        //             onLoad={this.handleImageLoaded.bind(this)}
        //             onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
        //     </div>
        // )
    }

    componentDidMount() {
        componentHandler.upgradeDom()
        // componentHandler.upgradeDom()
        // console.log('++++++++++++++++ applicationimage ++++++ componentDidMount ')
        // this.loadImage()
        // const imgid = this.props.imgid
        // var elm = $('#imgwrap'+imgid)
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
        // componentHandler.upgradeDom()
        componentHandler.upgradeAllRegistered()
        // console.log('++++++++++++++++ applicationimage ++++++ componentDidUpdate '+this.props.isUploading)

        const imgid = this.props.imgid
        const api = this.props.api
        // const width = this.props.width
        // const height = this.props.height

        var elm = $('#imgwrap' + imgid)
        // var imgbg=elm.find('.imgbg')
//    console.log('----elm.style.width='+require('util').inspect(Math.floor(elm.width()), false, null))
//    console.log('----elm.style.height='+require('util').inspect(Math.floor(elm.height()), false, null))
        const width = Math.floor(elm.width())
        const height = Math.floor(elm.height())

        var image = elm.find('.dataimg')
        // var image=$('#applicationlistitemimg'+imgid)
        var img = image[0]
        // var img = document.getElementById('applicationlistitemimg'+imgid)
        // console.log('++++++++++++++++ applicationimage ++++++ componentDidUpdate go into if has attrib data src: '+img.hasAttribute('data-src'))


        if (this.props.isUploading == false) {//img is a jquery object img[0] is the dom object
            const idToken = cookie.load('jwt')
            const idTokenParam = idToken == undefined ? '' : '&access_token=' + idToken
            // img[0].removeAttribute('src')
            // img.setAttribute('data-src', ApiConnection.apiurl+'/api/'+api+'/img/'+imgid+'?width='+width+'&height='+height+'&access_token='+ idToken+'&rdparam='+ Math.floor(Math.random() * 10000))
            img.setAttribute('data-src', ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/img/' + imgid + '?width=' + width + '&height=' + height + '' + idTokenParam + '&rdparam=' + Math.floor(Math.random() * 10000))
        }
        // var imgSpinner=elm.find('.mdl-spinner')
        if (img.hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
            // img[0].removeAttribute('src')
            var imgSpinner = elm.find('.mdl-spinner')
            // imgSpinner.remove()
            imgSpinner[0].style.display = 'block'
            img.style.display = 'none'
            img.setAttribute('src', img.getAttribute('data-src'))
            img.removeAttribute('data-src')
            // console.log('++++++++++++++++ applicationimage ++++++ componentDidUpdate setstate to true')
        }
    }


    handleImageLoaded() {
        // console.log('applicationimage handleImageLoaded ')
        const imgid = this.props.imgid
        var elm = $('#imgwrap' + imgid)
        var imgSpinner = elm.find('.mdl-spinner')

        var image = elm.find('.dataimg')
        var img = image[0]
        if (!img.hasAttribute('data-src')) {
            // this.props.imageLoaded = true
            // imgSpinner.remove()
            // console.log('++++++++++++++++ applicationimage ++++++ handleImageLoaded set background now' )
            img.style.display = 'block'
            if (img.getAttribute('src') != './images/0.png')
                img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #d7e7f4 95%, transparent 100%)'
            imgSpinner[0].style.display = 'none'
        } else
            this.setState({imageLoaded: true})
    }

    handleImageErrored() {
        // console.log('applicationimage handleImageErrored ')
        const imgid = this.props.imgid
        var elm = $('#imgwrap' + imgid)
        var imgSpinner = elm.find('.mdl-spinner')
        var image = elm.find('.dataimg')
        var img = image[0]
        imgSpinner[0].style.display = 'none'
        img.setAttribute('src', './images/0.png')

        // this.setState({ imageLoaded: false })
        // this.props.imageLoaded = false
    }

    shouldComponentUpdate(nextProps, nextState) {

        // const training=this.props.training
        // var isUploading = training==undefined?'':training.get('saving')
        var isUploading = this.props.isUploading
        // isUploading = isUploading==undefined?false:true
        if (isUploading == undefined)
            return false
        const imgid = this.props.imgid
        var elm = $('#imgwrap' + imgid)
        // var imgSpinner=elm.find('.mdl-spinner')
        var image = elm.find('.dataimg')
        var img = image[0]
        // console.log('++++++++++++++++ applicationimage ++++++ img.hasAttribute(data-src): '+ img.hasAttribute('data-src')+', id: '+imgid+'  this.props.isUploading: '+ this.props.isUploading)
        if (img.hasAttribute('data-src') || (this.props.isUploading && !img.hasAttribute('data-src'))) {
            // if (!this.props.isUploading) {
            // console.log('-------------------++++++++++++++++ application image render')
            return true
        }
        // console.log('-------------------++++++++++++++++ application image NO render')
        return false
        // return true
    }

    // loadImage(){
    //   console.log('++++++++++++++++ applicationlistitem ++++++ imageload ')
    //   // console.log('++++++++++++++++ applicationlistitem ++++++ really loading now')
    //   const imgid = this.props.imgid
    //   var elm = $('#imgwrap'+imgid)
    //   // var imgbg=elm.find('.imgbg')
    //   var img=elm.find('.dataimg')
    //   // var imgSpinner=elm.find('.mdl-spinner')

    //   if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
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
    //   }
    // }

}