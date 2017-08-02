import React from 'react'
import Immutable from 'immutable'
import TodosListItem from './todoslistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
    require('./todoslist.scss')
}

export default
class TodosList extends React.Component {
    constructor(props) {
        super(props)
        // console.log('todo list. Mixin in constructor')
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
//    console.log('mounted')
        // componentHandler.upgradeDom()
        // require('exports-loader?mdl=componentHandler!material-design-lite/material').upgradeDom()

    }

    componentDidUpdate() {
//    console.log('updated')
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
            {this.props.todos == undefined ?
                <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{
                    width: '55px',
                    height: '55px'
                }}></div>
                :
                <span>{this.renderItems()}</span>
                }
            </div>
        )
    }
}

