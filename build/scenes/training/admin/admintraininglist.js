import React from 'react';
//import { ThreeBounce } from 'better-react-spinkit'
import Immutable from 'immutable';

import AdminTrainingListItem from './admintraininglistitem';
import PureRenderMixin from 'react-addons-pure-render-mixin';
//import LogoSpinner from '../../../components/shared/logospinner'

if (process.env.BROWSER) {
  require('./admintraininglist.scss');
}

export default class AdminTrainingList extends React.Component {
  constructor(props) {
    super(props);
    // console.log('training list. Mixin in constructor')
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  renderItems() {
    var items = this.props.trainings;
    // const props = _.omit(this.props, 'trainings');
    // console.log('training list. render items. Size = '+items.size)
    if (items == undefined) return React.createElement('div', null);
    return items.map((training, index) => {
      // console.log('training list. index = '+index)
      return React.createElement(AdminTrainingListItem, { ind: index, training: training, actions: this.props.actions });
    });
  }

  render() {

    return React.createElement(
      'div',
      { className: 'admintrainingslist' },
      this.props.trainings == undefined ?
      //if i use div instead of span, big parts of the view are not clickable!
      React.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap', style: { width: '55px', height: '55px' } }) : React.createElement(
        'div',
        { className: 'admintrainingslistwrap mdl-grid mdl-grid--no-spacing' },
        this.renderItems()
      )
    );
  }
}