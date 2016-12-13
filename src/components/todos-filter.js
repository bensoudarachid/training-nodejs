import React from 'react'
// import _ from 'lodash'


export default class TodosFilter extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   error: null
    // };
  }

//defaultChecked={this.props.filterTodos!==undefined}
  render() {
    // console.log('filter todos. filter = '+this.props.filterTodos)
    return (
      <div>
      <p>open</p>
      <input type="checkbox" ref="filterOpen"
            defaultChecked={this.props.filteropen} 
            onClick={this.handleFilterOpen.bind(this)}/>
      <p>closed</p>
      <input type="checkbox" ref="filterTodosClosed"
            defaultChecked={this.props.filterclosed} 
            onClick={this.handleFilterClosed.bind(this)}/>
      </div>
    )
  }

  handleFilterOpen(event) {    
    // event.preventDefault();
    // const filterOpen = this.refs.filterOpen

    const filterOpen = event.target.checked //filterAllInput.value
    // var filter = undefined
    // if (filterAllChecked)
    //   filter = 'all'
    // console.log('filter todos. Open. Checkbox'+ event.target.checked+', Filter '+filterOpen)
    this.props.actions.filterTodosOpen(filterOpen)
  }
  handleFilterClosed(event) {    
    // event.preventDefault();
    // const filterOpen = this.refs.filterOpen

    const filterClosed = event.target.checked //filterAllInput.value
    // var filter = undefined
    // if (filterAllChecked)
    //   filter = 'all'
    // console.log('filter todos. handle toggle all. Checkbox'+ event.target.checked+', Filter '+filterClosed)
    this.props.actions.filterTodosClosed(filterClosed)
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task.'
    // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
    } else if (this.props.todos.find((todo) =>  todo.get('task') === task) ){
      return 'Task already exists.'
    } else {
      return null
    }
  }
}
