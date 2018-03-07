import 'ignore-styles'
import React from 'react'
import express from 'express'
import http from 'http'
import {match, RouterContext} from 'react-router'
import {renderToString} from 'react-dom/server'
import {routes} from 'app/routes'
import {applyMiddleware, bindActionCreators, createStore} from 'redux'
import rootReducer from 'services/rootreducer'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import fs from 'fs'
import multer from 'multer'
import {Provider} from 'react-redux'
import actions from 'services/actions'
import ApiConnection from 'services/apiconnection'


var httpProxy = require('http-proxy');

var apiProxy = httpProxy.createProxyServer();

var FormData = require('form-data')
const util = require('util')
var compression = require('compression')

var bodyParser = require('body-parser')

const appbasename = ''

var config = require('../webpack.config.js')
var webpack = require('webpack')


const app = express()
var storage = multer.memoryStorage()
var upload = multer({storage: storage})

// app.use('/api', proxy('' + process.env.TRAINING_API_LOCAL_IP + ':8080'));
var serverOne = 'http://' + process.env.TRAINING_API_LOCAL_IP + ':8080'
app.all("/api/*", function(req, res) {
    req.url = req.originalUrl
    // console.log('redirecting to Rest Server '+req.originalUrl)
    apiProxy.web(req, res, {target: serverOne})
})
app.all("/oauth/*", function(req, res) {
    req.url = req.originalUrl
    // console.log('redirecting to Auth Server '+req.originalUrl)
    apiProxy.web(req, res, {target: serverOne})
})
app.use('/bootstrap', express.static(__dirname + '/../node_modules/bootstrap/dist/'))
app.use('/mdl', express.static(__dirname + '/../node_modules/material-design-lite/dist/'))
app.use('/jquery', express.static(__dirname + '/../node_modules/jquery/dist/'))
app.use('/react', express.static(__dirname + '/../node_modules/react/dist/'))
app.use('/reactdom', express.static(__dirname + '/../node_modules/react-dom/dist/'))

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var compiler = webpack(config)
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))


process.on('uncaughtException', function (err) {
    console.log('serverjs. Process uncatched exception. See if you cant handle it anyhow else' + err)
})

app.post(appbasename + '/api/*/fileupload/*', upload.single('uploadfile'), function (req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.')
    }
    const authtoken = req.body.authorizationtoken !== undefined ? 'Bearer ' + req.body.authorizationtoken : req.headers.authorization
    var form = new FormData()
    form.append('uploadfile', req.file.buffer, req.file.originalname)
    var headers = form.getHeaders()
    headers.authorization = authtoken
    var extServerOptionsPost = {
        host: req.headers.host,
        expressPort: '8083',
        path: req.url,
        method: 'POST',
        headers: headers
    }
    var reqPost = http.request(extServerOptionsPost)
    form.pipe(reqPost)
    reqPost.on('response', function (res2) {
        var data = []
        res2.on('data', function (chunk) {
            data.push(chunk)
        }).on('error', function (e) {
            console.log('Error uploading ' + e)
        }).on('end', function () {
            var buffer = Buffer.concat(data)
            res.send({message: 'operation successful'})

        })
    })

    reqPost.on('error', function (e) {
        res.send({
            error: 'server unavailable',
            errorDescription: 'server is not responding'
        })
    })
    reqPost.end()
})

app.get(appbasename + '/api/*', (req, res) => {
    console.log('GET API ' + req.url)
    var extServerOptionsPost = {
        host: req.headers.host,
        expressPort: '8083',
        path: req.url,
        method: 'GET',
        headers: req.headers
    }

    var reqPost = http.request(extServerOptionsPost, function (res2) {
        var data = []
        res2.on('data', function (chunk) {
            data.push(chunk)
        }).on('end', function () {
            var buffer = Buffer.concat(data)
            res.send(buffer)
        })
    })

    reqPost.on('error', function (e) {
        console.log('server resource not there!')
        console.error(e)
        res.send({
            error: 'server unavailable',
            errorDescription: 'server is not responding'
        })
    })

    reqPost.end()
})


app.post(appbasename + '/api/*', function (req, res) {
    console.log('POST API. ' + req.url)
    var dataSend = JSON.stringify(req.body)
    const authtoken = req.body.authorizationtoken !== undefined ? 'Bearer ' + req.body.authorizationtoken : req.headers.authorization
    console.log('POST API. data = ' + dataSend)
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
    }


    var reqPost = http.request(extServerOptionsPost, function (res2) {
        var data = []
        res2.on('data', function (chunk) {
            data.push(chunk)
        }).on('end', function () {
            var buffer = Buffer.concat(data)
            console.log('working with chunks. better for images')
            res.send(buffer)
        })

    })
    reqPost.on('error', function (e) {
        res.send({
            error: 'server unavailable',
            errorDescription: 'server is not responding'
        })
    })
    reqPost.write(dataSend)
    reqPost.end()
})

var errorfile = __dirname + '/images/0.png'
const apifetch = fetch
const apirequire = require
app.get(appbasename + '/*', (req, res) => {
    const apihost = req.headers.host.replace('school.', 'schoolapi.')
    const favicon = req.protocol + '://' + apihost + ':8088/api/profile/logo?width=16&height=16'
    // console.log('Get request now just came: ' + req.url)
    fetch = apifetch
    fetch = (function (origFetch) {
        return function myFetch() {
            arguments[1].headers.ClientHost = req.headers.host.indexOf(':')!==-1?req.headers.host.substr(0,req.headers.host.indexOf(':')):req.headers.host
            console.log('arguments=' + require('util').inspect(arguments, false, null))
            var result = origFetch.apply(this, arguments)
            return result
        }
    })(fetch)

    if (req.url.indexOf('.') !== -1) {
        console.log('Send File: ' + __dirname + req.url)
        var file = __dirname + req.url
        var timeout = 0
        if (req.url.endsWith('.png')) {
            timeout = 350
        }
        // console.log('Timeout for ' + req.url + ' is ' + timeout)
        // console.log('Timeout done ' + req.url)
        setTimeout(function () {
            fs.readFile(file, function (err, data) {
                if (err) {
                    console.log('Error file not found. Send error File: ' + errorfile)
                    res.status(200).sendFile(errorfile)
                } else

                    res.end(data, 'binary')
            })
        }, timeout)
    } else {
        match({
            routes,
            location: req.url
        }, (err, redirectLocation, renderProps) => {
            if (err) {

                res.status(500).send(err.message)
            } else if (redirectLocation) {

                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {


                const components = renderProps.components


                if (components.some((c) => c && c.displayName === 'error-404')) {
                    res.status(404)
                }


                const initialState = {
                    auth: {url: 'Abbas'},
                    clientrequesthost: req.headers.host
                }


                const logger = createLogger()
                const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
                var dispactions = bindActionCreators(actions, store.dispatch)
                const {location, params, history} = renderProps

                match({
                    routes,
                    location: req.url
                }, (error, redirectLocation, renderProps) => {
                    const promises = renderProps.components
                        .filter((component) => {
                            console.log('filter component = ' + util.inspect(component, false, null))
                            return component != undefined ? component.fetchData : false

                        })
                        .map((component) => component.fetchData(dispactions, params, req.headers.host))
                    Promise.all(promises).then(() => {

                        console.log('resolved')


                        const body = renderToString(
                            <Provider store={store}>
                                <RouterContext {...renderProps} />
                            </Provider>
                        )

                        const state = store.getState()

                        console.log('State passed to client = ' + JSON.stringify(state))


                        res.status(200).send(`<!DOCTYPE html>
              <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
                <script defer src="/jquery/jquery.min.js"></script>
                <script defer src="/bootstrap/js/bootstrap.min.js"></script>
                <script src="https://cdn.jsdelivr.net/sockjs/1/sockjs.min.js"></script>
                <link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.min.css">
                <script defer src="/mdl/material.js"></script>
                <link rel="stylesheet" type="text/css" href="/mdl/material.brown-blue.min.css">
                <script defer src="/reactdom/react-dom.min.js"></script>
                <script defer src="/react/react.min.js"></script>
                <link rel="stylesheet" type="text/css" href="/style.css" />
                <link rel="icon" href="${favicon}">
                </head>
                <body style="background-color:#2980b9">
                  <div id="root"><div>${body}</div></div>
                  <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
                  <script defer src="/bundle.js"></script>

                </body>
              </html>`)
                    }).catch(err => console.log('Booooo' + err))
                })
            } else {
                res.sendStatus(404)
            }
        })
    }
})

app.use(express.static(__dirname))

var port = (process.env.PORT || ApiConnection.expressPort)
app.listen(port, function (error) {
    if (error)
        throw error
    console.log('Express server listening on expressPort', port)
})

export {port}