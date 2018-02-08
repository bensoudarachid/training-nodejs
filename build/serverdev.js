'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.port = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _routes = require('./app/routes');

var _redux = require('redux');

var _rootreducer = require('./services/rootreducer');

var _rootreducer2 = _interopRequireDefault(_rootreducer);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _reactRedux = require('react-redux');

var _actions = require('./services/actions');

var _actions2 = _interopRequireDefault(_actions);

var _apiconnection = require('./services/apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

var FormData = require('form-data');
var util = require('util');
var compression = require('compression');

var bodyParser = require('body-parser');

var appbasename = '';

var config = require('../webpack.config.js');
var webpack = require('webpack');

var app = (0, _express2.default)();
var storage = _multer2.default.memoryStorage();
var upload = (0, _multer2.default)({ storage: storage });

// app.use('/api', proxy('' + process.env.TRAINING_API_LOCAL_IP + ':8080'));
var serverOne = 'http://' + process.env.TRAINING_API_LOCAL_IP + ':8080';
app.all("/api/*", function (req, res) {
    req.url = req.originalUrl;
    console.log('redirecting to Rest Server ' + req.originalUrl);
    apiProxy.web(req, res, { target: serverOne });
});
app.all("/oauth/*", function (req, res) {
    req.url = req.originalUrl;
    // console.log('redirecting to Auth Server '+req.originalUrl)
    apiProxy.web(req, res, { target: serverOne });
});
app.use('/bootstrap', _express2.default.static(__dirname + '/../node_modules/bootstrap/dist/'));
app.use('/mdl', _express2.default.static(__dirname + '/../node_modules/material-design-lite/dist/'));
app.use('/jquery', _express2.default.static(__dirname + '/../node_modules/jquery/dist/'));
app.use('/react', _express2.default.static(__dirname + '/../node_modules/react/dist/'));
app.use('/reactdom', _express2.default.static(__dirname + '/../node_modules/react-dom/dist/'));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var compiler = webpack(config);
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

process.on('uncaughtException', function (err) {
    console.log('serverjs. Process uncatched exception. See if you cant handle it anyhow else' + err);
});

app.post(appbasename + '/api/*/fileupload/*', upload.single('uploadfile'), function (req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    var authtoken = req.body.authorizationtoken !== undefined ? 'Bearer ' + req.body.authorizationtoken : req.headers.authorization;
    var form = new FormData();
    form.append('uploadfile', req.file.buffer, req.file.originalname);
    var headers = form.getHeaders();
    headers.authorization = authtoken;
    var extServerOptionsPost = {
        host: req.headers.host,
        expressPort: '8083',
        path: req.url,
        method: 'POST',
        headers: headers
    };
    var reqPost = _http2.default.request(extServerOptionsPost);
    form.pipe(reqPost);
    reqPost.on('response', function (res2) {
        var data = [];
        res2.on('data', function (chunk) {
            data.push(chunk);
        }).on('error', function (e) {
            console.log('Error uploading ' + e);
        }).on('end', function () {
            var buffer = Buffer.concat(data);
            res.send({ message: 'operation successful' });
        });
    });

    reqPost.on('error', function (e) {
        res.send({
            error: 'server unavailable',
            errorDescription: 'server is not responding'
        });
    });
    reqPost.end();
});

app.get(appbasename + '/api/*', function (req, res) {
    console.log('GET API ' + req.url);
    var extServerOptionsPost = {
        host: req.headers.host,
        expressPort: '8083',
        path: req.url,
        method: 'GET',
        headers: req.headers
    };

    var reqPost = _http2.default.request(extServerOptionsPost, function (res2) {
        var data = [];
        res2.on('data', function (chunk) {
            data.push(chunk);
        }).on('end', function () {
            var buffer = Buffer.concat(data);
            res.send(buffer);
        });
    });

    reqPost.on('error', function (e) {
        console.log('server resource not there!');
        console.error(e);
        res.send({
            error: 'server unavailable',
            errorDescription: 'server is not responding'
        });
    });

    reqPost.end();
});

app.post(appbasename + '/api/*', function (req, res) {
    console.log('POST API. ' + req.url);
    var dataSend = JSON.stringify(req.body);
    var authtoken = req.body.authorizationtoken !== undefined ? 'Bearer ' + req.body.authorizationtoken : req.headers.authorization;
    console.log('POST API. data = ' + dataSend);
    var extServerOptionsPost = {
        host: req.headers.host,
        expressPort: '8083',
        path: req.url,
        method: 'POST',
        headers: {
            'Content-Length': Buffer.byteLength(dataSend),
            'Content-Type': 'application/json',
            authorization: authtoken
        }
    };

    var reqPost = _http2.default.request(extServerOptionsPost, function (res2) {
        var data = [];
        res2.on('data', function (chunk) {
            data.push(chunk);
        }).on('end', function () {
            var buffer = Buffer.concat(data);
            console.log('working with chunks. better for images');
            res.send(buffer);
        });
    });
    reqPost.on('error', function (e) {
        res.send({
            error: 'server unavailable',
            errorDescription: 'server is not responding'
        });
    });
    reqPost.write(dataSend);
    reqPost.end();
});

var errorfile = __dirname + '/images/0.png';
var apifetch = fetch;
app.get(appbasename + '/*', function (req, res) {
    var apihost = req.headers.host.replace('school.', 'schoolapi.');
    var favicon = req.protocol + '://' + apihost + ':8088/api/profile/logo?width=16&height=16';
    // console.log('Get request now just came: ' + req.url)
    fetch = apifetch;
    fetch = function (origFetch) {
        return function myFetch() {
            arguments[1].headers.ClientHost = req.headers.host.indexOf(':') !== -1 ? req.headers.host.substr(0, req.headers.host.indexOf(':')) : req.headers.host;
            console.log('arguments=' + require('util').inspect(arguments, false, null));
            var result = origFetch.apply(this, arguments);
            return result;
        };
    }(fetch);

    if (req.url.indexOf('.') !== -1) {
        console.log('Send File: ' + __dirname + req.url);
        var file = __dirname + req.url;
        var timeout = 0;
        if (req.url.endsWith('.png')) {
            timeout = 350;
        }
        // console.log('Timeout for ' + req.url + ' is ' + timeout)
        // console.log('Timeout done ' + req.url)
        setTimeout(function () {
            _fs2.default.readFile(file, function (err, data) {
                if (err) {
                    console.log('Error file not found. Send error File: ' + errorfile);
                    res.status(200).sendFile(errorfile);
                } else res.end(data, 'binary');
            });
        }, timeout);
    } else {
        (0, _reactRouter.match)({
            routes: _routes.routes,
            location: req.url
        }, function (err, redirectLocation, renderProps) {
            if (err) {

                res.status(500).send(err.message);
            } else if (redirectLocation) {

                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {

                var components = renderProps.components;

                if (components.some(function (c) {
                    return c && c.displayName === 'error-404';
                })) {
                    res.status(404);
                }

                var initialState = {
                    auth: { url: 'Abbas' },
                    clientrequesthost: req.headers.host
                };

                var logger = (0, _reduxLogger2.default)();
                var store = (0, _redux.createStore)(_rootreducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));
                var dispactions = (0, _redux.bindActionCreators)(_actions2.default, store.dispatch);
                var location = renderProps.location,
                    params = renderProps.params,
                    history = renderProps.history;


                (0, _reactRouter.match)({
                    routes: _routes.routes,
                    location: req.url
                }, function (error, redirectLocation, renderProps) {
                    var promises = renderProps.components.filter(function (component) {
                        console.log('filter component = ' + util.inspect(component, false, null));
                        return component != undefined ? component.fetchData : false;
                    }).map(function (component) {
                        return component.fetchData(dispactions, params, req.headers.host);
                    });
                    Promise.all(promises).then(function () {

                        console.log('resolved');

                        var body = (0, _server.renderToString)(_react2.default.createElement(
                            _reactRedux.Provider,
                            { store: store },
                            _react2.default.createElement(_reactRouter.RouterContext, renderProps)
                        ));

                        var state = store.getState();

                        console.log('State passed to client = ' + JSON.stringify(state));

                        res.status(200).send('<!DOCTYPE html>\n              <html>\n                <head>\n                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">\n                <script defer src="/jquery/jquery.min.js"></script>\n                <script defer src="/bootstrap/js/bootstrap.min.js"></script>\n                <link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.min.css">\n                <script defer src="/mdl/material.js"></script>\n                <link rel="stylesheet" type="text/css" href="/mdl/material.brown-blue.min.css">\n                <script defer src="/reactdom/react-dom.min.js"></script>\n                <script defer src="/react/react.min.js"></script>\n                <link rel="stylesheet" type="text/css" href="/style.css" />\n                <link rel="icon" href="' + favicon + '">\n                </head>\n                <body style="background-color:#2980b9">\n                  <div id="root"><div>' + body + '</div></div>\n                  <script>window.__REDUX_STATE__ = ' + JSON.stringify(state) + '</script>\n                  <script defer src="/bundle.js"></script>\n\n                </body>\n              </html>');
                    }).catch(function (err) {
                        return console.log('Booooo' + err);
                    });
                });
            } else {
                res.sendStatus(404);
            }
        });
    }
});

app.use(_express2.default.static(__dirname));

var port = process.env.PORT || _apiconnection2.default.expressPort;
app.listen(port, function (error) {
    if (error) throw error;
    console.log('Express server listening on expressPort', port);
});

exports.port = port;