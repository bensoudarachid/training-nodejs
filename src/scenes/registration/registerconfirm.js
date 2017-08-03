import React from 'react'


<<<<<<< HEAD
<<<<<<< HEAD
export default class RegisterConfirmation extends React.Component {
=======
export default
class RegisterConfirmation extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class RegisterConfirmation extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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