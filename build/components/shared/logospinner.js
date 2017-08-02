import React from 'react';

if (process.env.BROWSER) {
  console.log('LogoSpinner. environment is browser');
  require('./logospinner.scss');
}

export default class LogoSpinner extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'logospinner' },
      React.createElement(
        'span',
        { className: 'mdlspinnerwrap' },
        React.createElement('div', { className: 'mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active mdlspinner' })
      ),
      React.createElement(
        'span',
        { className: 'logowrap' },
        React.createElement('img', { src: './images/RoyaLogoNeutralH120.png', className: 'logo', alt: 'Roya logo' })
      )
    );
  }
  componentDidMount() {
    componentHandler.upgradeDom();
  }
}