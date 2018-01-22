'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactRouter = require('react-router');

var _history = require('history');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _actions = require('../services/actions');

var _actions2 = _interopRequireDefault(_actions);

require('mdl-selectfield/dist/mdl-selectfield.css');

require('mdl-selectfield/dist/mdl-selectfield.js');

require('../styles/animate.css');

require('./app.scss');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('./routes');

var _rootreducer = require('../services/rootreducer');

var _rootreducer2 = _interopRequireDefault(_rootreducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

(function ($) {

    $.fn.visible = function (partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top + 100,
            _bottom = _top + $t.height() - 300,
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        return compareBottom <= viewBottom && compareTop >= viewTop;
    };
    $.fn.load = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top - 700,
            _bottom = _top + $t.height() + 1200,
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return compareBottom <= viewBottom && compareTop >= viewTop;
    };
    $.fn.ellipsis = function () {
        return this.each(function () {
            var el = $(this);

            if (el.css('overflow') == 'hidden') {
                var height = function height() {
                    return t.height() > el.height();
                };

                var width = function width() {
                    return t.width() > el.width();
                };

                var text = el.html();
                var multiline = el.hasClass('multiline');
                var t = $(this.cloneNode(true)).hide().css('position', 'absolute').css('overflow', 'visible').width(multiline ? el.width() : 'auto').height(multiline ? 'auto' : el.height());
                el.after(t);

                var func = multiline ? height : width;

                while (text.length > 0 && func()) {
                    text = text.substr(0, text.length - 1);
                    t.html(text + '...');
                }
                el.html(t.html());
                t.remove();
            }
        });
    };
})($);

var NotFound = function NotFound() {
    return _react2.default.createElement(
        'h1',
        null,
        '404.... Page not found.'
    );
};

var initialState = JSON.parse(JSON.stringify(window.__REDUX_STATE__));
Object.keys(initialState).forEach(function (key) {
    initialState[key] = _immutable2.default.fromJS(initialState[key]);
});

if (initialState.trainingappmap.get('edittrainingevents')) {
    initialState.trainingappmap = initialState.trainingappmap.set('edittrainingevents', _immutable2.default.List(initialState.trainingappmap.get('edittrainingevents').toJS()));
}

var store = '';
if (process.env.NODE_ENV === 'production') store = (0, _redux.createStore)(_rootreducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));else {
    var logger = (0, _reduxLogger2.default)();
    store = (0, _redux.createStore)(_rootreducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));
}

var mybrowserHistory = (0, _reactRouter.useRouterHistory)(_history.createHistory)({
    basename: _actions2.default.appbasename
});

(0, _reactRouterRedux.syncHistoryWithStore)(mybrowserHistory, store);
window.routerHistory = mybrowserHistory;

$('.ellipsis').ellipsis();

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(Router, { routes: _routes.routes, history: mybrowserHistory })
), document.getElementById('root'));