import React, {Component} from 'react'

const users = [
    {
        name: 'abbas',
        malegender: true
    },
    {
        name: 'sa3diya',
        malegender: false
    },
    {
        name: 'hmida',
        malegender: true
    }
]

class UserApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users
        }
    }

    render() {
        return (
            <div>
                <h1>Users! mam0174</h1>
            </div>
        )
    }
}

export default UserApp