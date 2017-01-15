import React from 'react'
// import _ from 'lodash'


export default class TrainingCreate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null
    }
  }

  renderError() {
    if (!this.state.error) {
      return null
    }

    return <div style={{
      color: 'red'
    }}>{this.state.error}</div>
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
                {this.renderError()}
        </form>
      )
  }

  handleCreate(event) {
//    console.log('handle create call')
    event.preventDefault()

    const createInput = this.refs.createInput
    const title = createInput.value
    const validateInput = this.validateInput(title)
    if (validateInput) {
      this.setState({
        error: validateInput
      })
      return
    }

    this.setState({
      error: null
    })
    // this.props.createTask(title);
    this.props.actions.createTraining(title)
    this.refs.createInput.value = ''
  }

  validateInput(title) {
    if (!title) {
      return 'Please enter a title.'
    // } else if (_.find(this.props.trainings, (training) => training.get('title') === title)) {
    } else if (this.props.trainings.find((training) =>  training.get('title') === title) ){
      return 'Title already exists.'
    } else {
      return null
    }
  }

}
