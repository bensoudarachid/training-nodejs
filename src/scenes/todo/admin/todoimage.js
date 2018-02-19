import React from 'react'
import cookie from 'react-cookie'
import ApiConnection from 'services/apiconnection'
import $ from 'jquery'

export default class TodoImage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLoaded: undefined
        }
    }

    render() {
        const taskid = this.props.taskid
        const isUploading = this.props.isUploading

        const idToken = cookie.load('jwt')
        return (
            <div className='imgwrapper' id={'imgwrap' + taskid}>
                <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                <img id={'todolistitemimg' + taskid} src='./images/0.png'
                     data-src={ApiConnection.apiurl + ApiConnection.appbasename + '/api/todo/img/' + taskid + '?access_token=' + idToken}
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

        const taskid = this.props.taskid
        var elm = $('#imgwrap' + taskid)
        var image = elm.find('.dataimg')
        var img = image[0]


        if (this.props.isUploading == false) {
            const idToken = cookie.load('jwt')
            img.setAttribute('data-src', ApiConnection.apiurl + ApiConnection.appbasename + '/api/todo/img/' + taskid + '?access_token=' + idToken + '&rdparam=' + Math.floor(Math.random() * 10000))
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

}