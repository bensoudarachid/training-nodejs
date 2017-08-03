import React from 'react'


export default class RegisterConfirmation extends React.Component {
    render() {
// console.log(this.props)
//        <p>A little bit about {this.props.params.name}!!I like {this.props.location.query.food}!</p>
        return (
            <div>
                <p>Registration successful! An email will be sent to you. Please confirm your registration</p>
            </div>
        )
    }
}