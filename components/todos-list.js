import React from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import Immutable from 'immutable'
import TodosListHeader from './todos-header'
import TodosListItem from './todos-list-item'


export default class TodosList extends React.Component {
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
      (todo, index) => <TodosListItem key={index} todo={todo} actions={this.props.actions}/>
    )
  }

  render() {
    // console.log("Hi there from List. Props: "+this.props);
    return (
      <table>
        <TodosListHeader/>
        <tbody>
            {this.renderItems()}
        </tbody>
      </table>
    )
  }
}

