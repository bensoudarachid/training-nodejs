'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _admintrainingapp = require('../../scenes/training/admin/admintrainingapp');

var _admintrainingapp2 = _interopRequireDefault(_admintrainingapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trainingRoutes = _react2.default.createElement(
    _reactRouter.Route,
    { path: 'trainings', getChildRoutes: function getChildRoutes(location, cb) {
            cb(null, [_react2.default.createElement(_reactRouter.Route, { path: 'item/:id', component: require('../../scenes/training/admin/trainingedit.js').default }), _react2.default.createElement(_reactRouter.Route, { path: 'item/:id/schedule',
                component: require('../../scenes/training/admin/trainingschedule.js').default }), _react2.default.createElement(_reactRouter.Route, { path: 'item/new', component: require('../../scenes/training/admin/trainingedit.js').default })]);
        } },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _admintrainingapp2.default })
);

exports.default = trainingRoutes;