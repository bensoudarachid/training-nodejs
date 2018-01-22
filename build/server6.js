'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRedux = require('react-redux');

var _routes = require('../components/routes');

var _routes2 = _interopRequireDefault(_routes);

var _rootreducer = require('../services/rootreducer');

var _rootreducer2 = _interopRequireDefault(_rootreducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('*', function (req, res, next) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
        if (err) return next(err);

        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        if (!renderProps) {
            return next(new Error('Missing render props'));
        }

        var components = renderProps.components;

        // If the component being shown is our 404 component, then set appropriate status
        if (components.some(function (c) {
            return c && c.displayName === 'error-404';
        })) {
            res.status(404);
        }

        var Comp = components[components.length - 1].WrappedComponent;
        var fetchData = Comp && Comp.fetchData || function () {
            return Promise.resolve();
        };

        var initialState = {};
        var store = (0, _redux.createStore)(_rootreducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
        var location = renderProps.location,
            params = renderProps.params,
            history = renderProps.history;


        fetchData({ store: store, location: location, params: params, history: history }).then(function () {
            var body = (0, _server.renderToString)(React.createElement(
                _reactRedux.Provider,
                { store: store },
                React.createElement(_reactRouter.RouterContext, renderProps)
            ));

            var state = store.getState();

            res.send('<!DOCTYPE html>\n          <html>\n            <head>\n              <link rel="stylesheet" href="/bundle.css">\n            </head>\n            <body>\n              <div id="root">' + body + '</div>\n              <script>window.__REDUX_STATE__ = ' + JSON.stringify(state) + '</script>\n              <script src="/bundle.js"></script>\n            </body>\n          </html>');
        }).catch(function (err) {
            return next(err);
        });
    });
});

var server = app.listen(8080, function () {
    return console.log('Server started', server.address());
});