import React from 'react'
import Immutable from 'immutable'
import TodosListItem from './todoslistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
    require('./todoslist.scss')
}

export default class TodosList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        componentHandler.upgradeDom()

    }

    componentDidUpdate() {
        componentHandler.upgradeAllRegistered()
        console.log('componentHandler=' + require('util').inspect(componentHandler, false, null))
    }

    getItems() {
        if (this.props.todos) {
            return this.props.todos.filter(
                (item) =>
                    item.get('completed') && this.props.filterclosed ||
                    !item.get('completed') && this.props.filteropen
            )
        }
        return Immutable.List([])
    }

    renderItems() {
        var items = this.getItems()

        return items.map(
            (todo, index) => {
                return <TodosListItem ind={index} todo={todo} actions={this.props.actions}/>
            }
        )
    }

    render() {
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

