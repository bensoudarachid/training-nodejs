import React from 'react'
import Immutable from 'immutable'
import TodosListItem from './todoslistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
    require('./todoslist.scss')
}

<<<<<<< HEAD
<<<<<<< HEAD
export default class TodosList extends React.Component {
=======
export default
class TodosList extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class TodosList extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    constructor(props) {
        super(props)
        // console.log('todo list. Mixin in constructor')
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
<<<<<<< HEAD
//    console.log('mounted')
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
//    console.log('mounted')
        // componentHandler.upgradeDom()
        // require('exports-loader?mdl=componentHandler!material-design-lite/material').upgradeDom()

>>>>>>> 6e3ff02... webstorm big changes crash
    }

    componentDidUpdate() {
//    console.log('updated')
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeAllRegistered()
    }

    getItems() {
        // console.log('todo list filteropen ' + this.props.filteropen)
        // console.log('todo list filterclosed ' + this.props.filterclosed)
        if (this.props.todos) {
            return this.props.todos.filter(
                (item) =>
                    item.get('completed') && this.props.filterclosed ||
                    !item.get('completed') && this.props.filteropen
            )
            // console.log('todo list get items. render items. Size = '+listtodos.size)
        }
        return Immutable.List([])
    }

    renderItems() {
        var items = this.getItems()
        // const props = _.omit(this.props, 'todos');
        // console.log('todo list. render items. Size = '+items.size)

=======
        componentHandler.upgradeAllRegistered()
        console.log('componentHandler=' + require('util').inspect(componentHandler, false, null))
        // componentHandler.upgradeAllRegistered()
        // require('exports-loader?mdl=componentHandler!material-design-lite/material').upgradeAllRegistered()
    }

    getItems() {
        // console.log('todo list filteropen ' + this.props.filteropen)
        // console.log('todo list filterclosed ' + this.props.filterclosed)
        if (this.props.todos) {
            return this.props.todos.filter(
                (item) =>
                    item.get('completed') && this.props.filterclosed ||
                    !item.get('completed') && this.props.filteropen
            )
            // console.log('todo list get items. render items. Size = '+listtodos.size)
        }
        return Immutable.List([])
    }

    renderItems() {
        var items = this.getItems()
        // const props = _.omit(this.props, 'todos');
        // console.log('todo list. render items. Size = '+items.size)

>>>>>>> 6e3ff02... webstorm big changes crash
        return items.map(
            (todo, index) => {
                // console.log('todo list. index = '+index)
                return <TodosListItem ind={index} todo={todo} actions={this.props.actions}/>
                // return <div style={{width:'60%',margin:'auto',backgroundColor:'orange'}}>WOOOOOW {todo.get('id')}</div>
            }
        )
    }

    // renderO() {
    //   if(this.props.todos==undefined)
    //     return (
    //       <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{width:'55px',height:'55px'}}></div>
    //     )
    //   return (
    //     <div className='todoslist'>
    //     {this.renderItems()}
    //     </div>
    //   )
    // }
    render() {
        // console.log('Hi there from List. Props: '+this.props);
        // {this.props.todos==undefined?
        //           <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
        //         :
        //           <div/>
        // }
        // Putting <div></div> instead of <span></span> produces a ununderstandlable scroll mess!
        return (
            <div className='todoslist'>
<<<<<<< HEAD
<<<<<<< HEAD
                {this.props.todos == undefined ?
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active'
                         style={{width: '55px', height: '55px'}}></div>
                    :
                    <span>{this.renderItems()}</span>
=======
            {this.props.todos == undefined ?
                <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{
                    width: '55px',
                    height: '55px'
                }}></div>
                :
                <span>{this.renderItems()}</span>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                {this.props.todos == undefined ?
                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{
                        width: '55px',
                        height: '55px'
                    }}></div>
                    :
                    <span>{this.renderItems()}</span>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                }
            </div>
        )
    }
}

