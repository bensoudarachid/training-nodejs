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
//        console.log('app image datasrc=' + require('util').inspect(datasrc, false, null))
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
    }

    componentDidMount() {
        componentHandler.upgradeDom()
    }

    componentDidUpdate() {
        componentHandler.upgradeAllRegistered()

        const imgid = this.props.imgid
        const api = this.props.api

        var elm = $('#imgwrap' + imgid)
        const width = Math.floor(elm.width())
        const height = Math.floor(elm.height())

        var image = elm.find('.dataimg')
        var img = image[0]


        if (this.props.isUploading == false) {
            const idToken = cookie.load('jwt')
            const idTokenParam = idToken == undefined ? '' : '&access_token=' + idToken
            img.setAttribute('data-src', ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/img/' + imgid + '?width=' + width + '&height=' + height + '' + idTokenParam + '&rdparam=' + Math.floor(Math.random() * 10000))
        }
        if (img.hasAttribute('data-src')) {
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

}