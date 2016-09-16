import React, {Component} from 'react'
import _ from 'lodash'

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
    //let test = 'App';
    //console.log("Hi there from "+test);
    //  alert("Hi "+test);
        return (
      <div>
            <h1>Users! mam0174</h1>
        </div>
      )
    }


}
export default UserApp