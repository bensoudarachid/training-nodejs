import React from 'react'
import cookie from 'react-cookie'
// import actions from '../../../services/actions'
import ApiConnection from '../../../services/apiconnection'
import $ from 'jquery'

export default class TodoImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imageLoaded: undefined
    }
  }

            // <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
            //     onLoad={this.handleImageLoaded.bind(this)}
            //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
            // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
            // {  isUploading && this.state.imageLoaded==undefined?
            // <div>HALLOOOOO</div>
            // :<div>weg</div>
            // }

            // <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
            //     onLoad={this.handleImageLoaded.bind(this)}
            //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

  render() {
    // console.log('todimage. render now')
    const taskid = this.props.taskid
    const isUploading  = this.props.isUploading 
//    console.log('todoimage render. isUploading '+isUploading )
    // console.log('todoimage render. this.state.imageLoaded '+this.state.imageLoaded )
    // if( isUploading == false){
    //   const taskid = this.props.taskid
    //   var elm = $('#imgwrap'+taskid)
    //   var image=elm.find('.dataimg')
    //   var img = image[0]
    //   img.setAttribute('data-src', ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken+'&param='+ Math.floor(Math.random() * 10000))
    // }

    const idToken = cookie.load('jwt')
    return (
        <div className='imgwrapper' id={'imgwrap'+taskid} >
            <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
            <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
        </div>
    )
    // return (
    //     <div className='imgwrapper' id={'imgwrap'+taskid} >
    //     {  this.state.imageLoaded==undefined?
    //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
    //         :<div/>
    //     }
    //         <img id={'todolistitemimg'+taskid} src={ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
    //             onLoad={this.handleImageLoaded.bind(this)}
    //             onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
    //     </div>
    // )
  }

  componentDidMount() {
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
//    console.log('++++++++++++++++ todoimage ++++++ componentDidUpdate '+this.props.isUploading)   

    const taskid = this.props.taskid
    var elm = $('#imgwrap'+taskid)
    // var imgbg=elm.find('.imgbg')
    var image=elm.find('.dataimg')
    // var image=$('#todolistitemimg'+taskid)
    var img = image[0]
    // var img = document.getElementById('todolistitemimg'+taskid)
    // console.log('++++++++++++++++ todoimage ++++++ componentDidUpdate go into if has attrib data src: '+img.hasAttribute('data-src'))


    if (this.props.isUploading == false) {//img is a jquery object img[0] is the dom object 
      const idToken = cookie.load('jwt')
      // img[0].removeAttribute('src')
      img.setAttribute('data-src', ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken+'&rdparam='+ Math.floor(Math.random() * 10000))
    }        
    // var imgSpinner=elm.find('.mdl-spinner')
    if (img.hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
      // img[0].removeAttribute('src')
      var imgSpinner=elm.find('.mdl-spinner')
      // imgSpinner.remove()
      imgSpinner[0].style.display = 'block'
      img.style.display = 'none'
      img.setAttribute('src', img.getAttribute('data-src'))
      img.removeAttribute('data-src')
      // console.log('++++++++++++++++ todoimage ++++++ componentDidUpdate setstate to true')
    }        
  }


  handleImageLoaded() {
    // console.log('todoimage handleImageLoaded ')
    const taskid = this.props.taskid
    var elm = $('#imgwrap'+taskid)
    var imgSpinner=elm.find('.mdl-spinner')

    var image=elm.find('.dataimg')
    var img = image[0]
    if (!img.hasAttribute('data-src')) {
      // this.props.imageLoaded = true
      // imgSpinner.remove()
      // console.log('++++++++++++++++ todoimage ++++++ handleImageLoaded set background now' )
      img.style.display = 'block'
      if(img.getAttribute('src') != './images/0.png')
        img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #69F 95%, transparent 100%)'
      imgSpinner[0].style.display = 'none'
    }else
      this.setState({ imageLoaded: true })
  }
 
  handleImageErrored() {
    // console.log('todoimage handleImageErrored ')
    const taskid = this.props.taskid
    var elm = $('#imgwrap'+taskid)
    var imgSpinner=elm.find('.mdl-spinner')
    var image=elm.find('.dataimg')
    var img = image[0]
    imgSpinner[0].style.display = 'none'
    img.setAttribute('src', './images/0.png')

    // this.setState({ imageLoaded: false })
    // this.props.imageLoaded = false
  }
  shouldComponentUpdate(nextProps, nextState) {

    // const isUploading  = this.props.isUploading
    const taskid = this.props.taskid
    var elm = $('#imgwrap'+taskid)
    // var imgSpinner=elm.find('.mdl-spinner')
    var image=elm.find('.dataimg')
    var img = image[0]
//    console.log('++++++++++++++++ todoimage ++++++ img.hasAttribute(data-src): '+ img.hasAttribute('data-src')+', id: '+taskid+'  this.props.isUploading: '+ this.props.isUploading)
    if (img.hasAttribute('data-src') || (this.props.isUploading&&!img.hasAttribute('data-src')) ) {
    // if (!this.props.isUploading) {
      return true
    }
    return false
  }

  // loadImage(){
  //   console.log('++++++++++++++++ todolistitem ++++++ imageload ')
  //   // console.log('++++++++++++++++ todolistitem ++++++ really loading now')
  //   const taskid = this.props.taskid
  //   var elm = $('#imgwrap'+taskid)
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