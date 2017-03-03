import React from 'react'
import cookie from 'react-cookie'
import actions from '../../../services/actions'
import $ from 'jquery'

export default class TrainingImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imageLoaded: undefined
    }
  }

            // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}           
            //     onLoad={this.handleImageLoaded.bind(this)}
            //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
            // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
            // {  isUploading && this.state.imageLoaded==undefined?
            // <div>HALLOOOOO</div>
            // :<div>weg</div>
            // }

            // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}           
            //     onLoad={this.handleImageLoaded.bind(this)}
            //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

  render() {
    // console.log('todimage. render now')
    const trainingid = this.props.trainingid
    // const isUploading  = this.props.isUploading 
    const idToken = cookie.load('jwt')
    // img[0].removeAttribute('src')
    
    var accesstokenparam = ''
    if (idToken != undefined)
      accesstokenparam = 'access_token='+ idToken+'&'
    // img.setAttribute('data-src', actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken+'&param='+ Math.floor(Math.random() * 10000))
    // img.setAttribute('data-src', actions.apiurl+'/api/training/img/'+trainingid+'?'+ accesstokenparam+'param='+ Math.floor(Math.random() * 10000))


    console.log('trainingimage render. get '+ actions.apiurl+'/api/training/img/'+trainingid)
    // console.log('trainingimage render. this.state.imageLoaded '+this.state.imageLoaded )

            // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={actions.apiurl+'/api/training/img/'+trainingid}
    // const idToken = cookie.load('jwt')
    return (
        <div className='imgwrapper' id={'trainingimgwrap'+trainingid} >
            <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
            <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={actions.apiurl+'/api/training/img/'+trainingid+'?'+ accesstokenparam+'param='+ Math.floor(Math.random() * 10000)}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
        </div>
    )
    // return (
    //     <div className='imgwrapper' id={'imgwrap'+trainingid} >
    //     {  this.state.imageLoaded==undefined?
    //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
    //         :<div/>
    //     }
    //         <img id={'traininglistitemimg'+trainingid} src={actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}           
    //             onLoad={this.handleImageLoaded.bind(this)}
    //             onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
    //     </div>
    // )
  }

  componentDidMount() {
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    // console.log('++++++++++++++++ trainingimage ++++++ componentDidMount ')
    // this.loadImage()
    // const trainingid = this.props.trainingid
    // var elm = $('#imgwrap'+trainingid)
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

    const trainingid = this.props.trainingid
    console.log('+++++++ trainingimage ++++++ componentDidUpdate. get img by id '+trainingid)
    // if( this.props.isUploading)
    //   console.log('+++++++ trainingimage ++++++ componentDidUpdate. img is uploading '+this.props.isUploading)
    // else
    //   console.log('+++++++ trainingimage ++++++ componentDidUpdate. img is not uploading '+this.props.isUploading)

    var elm = $('#trainingimgwrap'+trainingid)
    // var imgbg=elm.find('.imgbg')
    // var image=elm.find('.dataimg')
    // var image = $('#traininglistitemimg'+trainingid)
    // var img = image[0]
    var img = document.getElementById('traininglistitemimg'+trainingid)
    // console.log('++++++++++++++++ trainingimage ++++++ componentDidUpdate go into if has attrib data src: '+img.hasAttribute('data-src'))
    // var image=$('#traininglistitemimg'+trainingid)


    // if (this.props.isUploading) {//img is a jquery object img[0] is the dom object 
    //   const idToken = cookie.load('jwt')
    //   // img[0].removeAttribute('src')
      
    //   var accesstokenparam = ''
    //   if (idToken != undefined)
    //     accesstokenparam = 'access_token='+ idToken+'&'
    //   // img.setAttribute('data-src', actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken+'&param='+ Math.floor(Math.random() * 10000))
    //   img.setAttribute('data-src', actions.apiurl+'/api/training/img/'+trainingid+'?'+ accesstokenparam+'param='+ Math.floor(Math.random() * 10000))
    //   console.log('Set data-src to ' + actions.apiurl+'/api/training/img/'+trainingid+'?'+ accesstokenparam+'param='+ Math.floor(Math.random() * 10000))
    // }        
    // var imgSpinner=elm.find('.mdl-spinner')
    if (img.hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
      // img[0].removeAttribute('src')
      console.log('Spinner go')
      var imgSpinner=elm.find('.mdl-spinner')
      // imgSpinner.remove()
      imgSpinner[0].style.display = 'block'
      img.style.display = 'none'
      console.log('Set src to ' + img.getAttribute('data-src') +' by '+ img.getAttribute('id'))
      img.setAttribute('src', img.getAttribute('data-src'))
      img.removeAttribute('data-src')
    }        
  }


  handleImageLoaded() {
    // console.log('trainingimage handleImageLoaded ')
    const trainingid = this.props.trainingid
    console.log('trainingimage handleImageLoaded '+trainingid)
    var elm = $('#trainingimgwrap'+trainingid)
    var imgSpinner=elm.find('.mdl-spinner')
    var img = document.getElementById('traininglistitemimg'+trainingid)
    if (!img.hasAttribute('data-src')) {
      
    // this.props.imageLoaded = true
    // var image = $('#traininglistitemimg'+trainingid)
    // var img = image[0]
    // var image=elm.find('.dataimg')
    // var img = image[0]
    // if (!img.hasAttribute('data-src')) {
      // imgSpinner.remove()
      // console.log('Spinner stop' )
      img.style.display = 'block'
      if(img.getAttribute('src') != './images/0.png')
        img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #69F 95%, transparent 100%)'
      imgSpinner[0].style.display = 'none'
      // imgSpinner[0].style.display = 'none'
    }else{
      this.setState({ imageLoaded: true })//just  a trigger to rerender
    }
  }
 
  handleImageErrored() {
    const trainingid = this.props.trainingid
    console.log('trainingimage handleImageErrored '+trainingid)
    var elm = $('#trainingimgwrap'+trainingid)
    var imgSpinner=elm.find('.mdl-spinner')
    var image=elm.find('.dataimg')
    var img = image[0]
    imgSpinner[0].style.display = 'none'
    img.setAttribute('src', './images/0.png')

    // this.setState({ imageLoaded: false })
    // this.props.imageLoaded = false
  }
  shouldComponentUpdate(nextProps, nextState) {
    const isUploading  = this.props.isUploading
    console.log('++++++++++++++++ trainingimage ++++++ shouldComponentUpdate'+ isUploading)
    const trainingid = this.props.trainingid
    var img = document.getElementById('traininglistitemimg'+trainingid)
    if (img.hasAttribute('data-src')) {
    // if (!this.props.isUploading) {
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