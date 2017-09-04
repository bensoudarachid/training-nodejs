import React from 'react'
import express from 'express'
import http from 'http'
import {RouterContext, match} from 'react-router'
import {renderToString} from 'react-dom/server'
import {routes} from '../components/routes';
<<<<<<< HEAD
=======

>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

var config = require('../webpack.config.js');
var webpack = require('webpack');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));


app.use(express.static('./public'));

app.set('view engine', 'ejs');

// app.get('*', (req, res) => {
//   res.render('index');
// });

app.get('*', (req, res) => {
    // routes is our object of React routes defined above
    match({routes, location: req.url}, (err, redirectLocation, props) => {
        if (err) {
            // something went badly wrong, so 500 with a message
            res.status(500).send(err.message);
        } else if (redirectLocation) {
            // we matched a ReactRouter redirect, so redirect from the server
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (props) {
            // if we got props, that means we found a valid component to render
            // for the given route
            const markup = renderToString(<RouterContext {...props} />);

            // render `index.ejs`, but pass in the markup we want it to display
            res.render('index', {markup})

        } else {
            // no route match, so 404. In a real app you might render a custom
            // 404 view here
            res.sendStatus(404);
        }
    });
});

var port = 8080

app.listen(port, function (error) {
    if (error) throw error;
    console.log("Express server listening on expressPort", port);
});

// const server = http.createServer(app);

// server.listen(8080);
// server.on('listening', () => {
//   console.log('Listening on 8080');
// });