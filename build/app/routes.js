'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routes = undefined;

var _appcomponent = require('../app/appcomponent');

var _appcomponent2 = _interopRequireDefault(_appcomponent);

var _trainingapp = require('../scenes/training/public/trainingapp');

var _trainingapp2 = _interopRequireDefault(_trainingapp);

var _home = require('../scenes/home/home');

var _home2 = _interopRequireDefault(_home);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.IndexRedirect;

var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require);
};

var Users = function Users(_ref) {
    var params = _ref.params,
        location = _ref.location;
    return _react2.default.createElement(
        'h3',
        null,
        'Howdy Wa fin ',
        params.name,
        '! You like Food: ',
        location.query.food,
        '.'
    );
};
var NotFound = function NotFound() {
    return _react2.default.createElement(
        'h1',
        null,
        '404.... Page not found.'
    );
};

var routes = _react2.default.createElement(
    Route,
    { path: '/', component: _appcomponent2.default,
        getChildRoutes: function getChildRoutes(location, cb) {
            cb(null, [_react2.default.createElement(Route, { path: 'register', component: require('../scenes/registration/register').default }), require('./routes/adminroutes.js').default, _react2.default.createElement(Route, { path: 'trainings', component: _trainingapp2.default }), _react2.default.createElement(Route, { path: '*', component: NotFound })]);
        } },
    '>',
    _react2.default.createElement(IndexRoute, { component: _home2.default })
);

exports.routes = routes;