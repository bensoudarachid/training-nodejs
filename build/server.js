'use strict';

var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./public'));
// app.set('view engine', 'html');
// app.set('views', path.resolve('public'));
// app.engine('html', require('ejs').renderFile);


console.log('cool man now');
app.use('/', function (req, res) {
    // res.render(path.resolve('public/index.html'),{});
    console.log('send file' + path.resolve('client/index.html'));
    res.sendFile(path.resolve('client/index.html'), {});
    // res.render('index.html',{});
    // res.sendFile('index.html',{});
});
var port = 8080;

app.listen(port, function (error) {
    if (error) throw error;
    console.log("Express server listening on port", port);
});