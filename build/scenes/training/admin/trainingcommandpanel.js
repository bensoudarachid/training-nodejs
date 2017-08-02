import React from 'react';
// import _ from 'lodash'

if (process.env.BROWSER) {
  require('./trainingcommandpanel.scss');
}

export default class TrainingCommandPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) {
      return null;
    }

    return React.createElement(
      'div',
      { style: {
          color: 'red'
        } },
      this.state.error
    );
  }

  // renderOld() {
  //   return (
  //     <form onSubmit={this.handleCreate.bind(this)}>
  //           <input type="text" placeholder="What do I need to do?" ref="searchInput" />
  //               <button>Create</button>
  //               {this.renderError()}
  //       </form>
  //     )
  // }
  render() {
    const errorClass = this.state.error ? 'error' : '';

    return React.createElement(
      'div',
      { id: 'trainingcommandpanel', className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
      React.createElement(
        'form',
        { className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone', onSubmit: this.handleSearch.bind(this) },
        React.createElement(
          'div',
          { className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone' },
          React.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--10-col mdl-cell--7-col-tablet mdl-cell--3-col-phone' },
            React.createElement(
              'div',
              { className: 'mdl-textfield tf mdl-js-textfield' },
              React.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'searchInput', id: 'searchInput' }),
              React.createElement(
                'label',
                { className: 'mdl-textfield__label', htmlFor: 'searchInput' },
                'Search...'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone' },
            React.createElement(
              'button',
              { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored ' },
              'Search'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
          React.createElement(
            'button',
            { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items', onClick: this.handleNew.bind(this) },
            'New'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
        React.createElement(
          'div',
          { className: errorClass },
          this.state.error
        )
      )
    );
  }

  handleSearch(event) {
    console.log('handle search call');
    event.preventDefault();

    // const searchInput = this.refs.searchInput
    // const title = searchInput.value
    // const validateInput = this.validateInput(title)
    // if (validateInput) {
    //   this.setState({
    //     error: validateInput
    //   })
    //   return
    // }

    // this.setState({
    //   error: null
    // })
    // // this.props.createTask(title);
    // this.props.actions.createTraining(title)
    // this.refs.searchInput.value = ''
  }
  handleNew(event) {
    console.log('handle New call');
    event.preventDefault();
    this.props.actions.newTraining();
    // window.routerHistory.push('trainings/item/new')
  }

  // validateInput(title) {
  //   if (!title) {
  //     return 'Please enter a title.'
  //   // } else if (_.find(this.props.trainings, (training) => training.get('title') === title)) {
  //   } else if (this.props.trainings.find((training) =>  training.get('title') === title) ){
  //     return 'Title already exists.'
  //   } else {
  //     return null
  //   }
  // }

}