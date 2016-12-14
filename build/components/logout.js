'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // components/Logout.js

// import React, { Component, PropTypes } from 'react'


var Logout = function (_Component) {
  _inherits(Logout, _Component);

  function Logout() {
    _classCallCheck(this, Logout);

    return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
  }

  _createClass(Logout, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // const { onLogoutClick } = this.props
      // <button onClick={() => onLogoutClick()} className="btn btn-primary">

      return React.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.handleClick();
          }, className: 'btn btn-primary' },
        React.createElement('span', { className: 'glyphicon glyphicon-log-out' }),
        ' Logout'
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onLogoutClick(this.props.auth.get('id_token'));
    }
  }]);

  return Logout;
}(_react.Component);

exports.default = Logout;


Logout.propTypes = {
  onLogoutClick: _react.PropTypes.func.isRequired
};