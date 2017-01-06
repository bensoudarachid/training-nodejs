import React from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import Immutable from 'immutable'
import TodosListHeader from './todos-header'
import TodosListItem from './todos-list-item'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
  require('./todos-list.scss')
}

export default class TodosList extends React.Component {
  constructor(props) {
    super(props)
    console.log('todo list. Mixin in constructor')
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  
  componentDidMount(){
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
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
      }
    )
  }

  renderOld() {
    // console.log('Hi there from List. Props: '+this.props);
    return (
      <div>
      <table>
        <TodosListHeader/>
        <tbody>
            {this.renderItems()}
        </tbody>
      </table>
      </div>
    )
  }
  render() {
    // console.log('Hi there from List. Props: '+this.props);
      // <div className="mdl-layout-spacer"></div>
    return (
      <div className='todoslist'>
      {this.renderItems()}
      </div>
    )
  }
  renderNew() {
    // console.log('Hi there from List. Props: '+this.props);
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

