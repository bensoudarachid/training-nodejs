import React from 'react'
// import _ from 'lodash'

if (process.env.BROWSER) {
  require('./todosfilter.scss')
}


export default class TodosFilter extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   error: null
    // };
  }
          // <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'><p>open</p></div>
          // <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'><p>closed</p></div>

//defaultChecked={this.props.filterTodos!==undefined}
  render() {
    // console.log('filter todos. filter = '+this.props.filterTodos)
    return (
        <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--3-col-phone'>
          <div id='todosfilter' className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
            <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone checkboxinput'>
              <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox2">
                <input type="checkbox" id="checkbox1" className="mdl-checkbox__input" ref="filterOpen" defaultChecked={this.props.filteropen} onClick={this.handleFilterOpen.bind(this)} />
                <span className="mdl-checkbox__label">Open</span>
              </label>
            </div>
            <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
              <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkboxinput" for="checkbox2">
                <input type="checkbox" id="checkbox2" className="mdl-checkbox__input" ref="filterTodosClosed" defaultChecked={this.props.filterclosed} onClick={this.handleFilterClosed.bind(this)} />
                <span className="mdl-checkbox__label">Closed</span>
              </label>
            </div>
          </div>
        </div>

    )
  }

  renderOld() {
    // console.log('filter todos. filter = '+this.props.filterTodos)
    return (

      <div id='todosfilter'>
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
