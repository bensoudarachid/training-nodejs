import React from 'react'
import cookie from 'react-cookie'
import ApiConnection from '../services/apiconnection'

export default class TodoImage extends React.Component {

    render() {
        const taskid = this.props.taskid
        const idToken = cookie.load('jwt')
        return (
            <div className='imgwrap' id={'imgwrap' + taskid}>
                <img id={'todolistitemimg' + taskid}
                     src={ApiConnection.apiurl + '/api/todo/img/' + taskid + '?access_token=' + idToken}
                     className='dataimg' alt='coding'/>
            </div>
        )
    }

    componentDidMount() {
        this.loadImage()
    }

    loadImage() {
        // console.log('++++++++++++++++ todolistitem ++++++ imageload ')
    }

}