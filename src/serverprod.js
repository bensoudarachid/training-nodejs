import 'ignore-styles'
import React from 'react'
import express from 'express'
import http from 'http'
import {RouterContext, match} from 'react-router'
import {renderToString} from 'react-dom/server'
import {routes} from './app/routes'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './services/rootreducer'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import fs from 'fs'
import multer from 'multer'
import {Provider} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from './services/actions'
import ApiConnection from './services/apiconnection'

var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();


var assets = require('../assets/assets.json')
var FormData = require('form-data')
const util = require('util')
var compression = require('compression')

var bodyParser = require('body-parser') // is used for POST requests

const appbasename = ''

const app = express()

var favicon = require('serve-favicon')
var storage = multer.memoryStorage()
var upload = multer({storage: storage})

var serverOne = 'http://' + process.env.TRAINING_API_LOCAL_IP + ':8080'
// var serverOne = 'http://' + process.env.TRAINING_API_LOCAL_IP
app.all("/api/*", function(req, res) {
    req.url = req.originalUrl
    console.log('redirecting to Rest Server '+serverOne +' the request '+req.originalUrl)
    apiProxy.web(req, res, {target: serverOne})
})
app.all("/oauth/*", function(req, res) {
    req.url = req.originalUrl
    console.log('redirecting to Auth Server '+serverOne +' the request '+req.originalUrl)
    apiProxy.web(req, res, {target: serverOne})
})

app.use('/bootstrap', express.static(__dirname + '/../node_modules/bootstrap/dist/'))
app.use('/mdl', express.static(__dirname + '/../node_modules/material-design-lite/dist/'))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(__dirname))

process.on('uncaughtException', function (err) {
    console.log('serverjs. Process uncatched exception. See if you cant handle it anyhow else' + err)
})

app.post(appbasename + '/api/*/fileupload/*', upload.single('uploadfile'), function (req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.')
    }
    console.log('POST API. Uploading file orig name ' + req.file.originalname, ', name ' + req.file.name)
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
            // console.log('working with chunks. better for images. Response is ' + buffer)
            res.send({message: 'operation successful'})
        })
    })

    reqPost.on('error', function (e) {
        console.log('server resource not there! send empty json')
        console.error(e)
        res.send({
            error: 'server unavailable',
            errorDescription: 'server is not responding'
        })
    })
    reqPost.end()
})

app.get(appbasename + '/api/*', (req, res) => {
    console.log('GET API ' + req.url)
    console.log('GET API. ' + req.headers.host)
    var extServerOptionsPost = {
        host: req.headers.host,
        expressPort: '8083',
        path: req.url,
        method: 'GET',
        headers: req.headers
    }

    var reqPost = http.request(extServerOptionsPost, function (res2) {
        res2.on('data', function (data) {
            console.log('GET Operation Completed.\n\n')
            res.send(data)
        })
    })

    reqPost.on('error', function (e) {
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
    console.log('POST API. ' + req.headers.host)
    const dataSend = JSON.stringify(req.body)
    var extServerOptionsPost = {
        host: req.headers.host,
        expressPort: '8083',
        path: req.url,
        method: 'POST',
        headers: {
            'Content-Length': Buffer.byteLength(dataSend),
            'Content-Type': 'application/json',
            authorization: req.headers.authorization
        }
    }

    var reqPost = http.request(extServerOptionsPost, function (res2) {
        res2.on('data', function (data) {
            console.log('POST Operation Completed.\n\n')
            res.send(data)

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
app.get(appbasename + '/*', (req, res) => {
    const apihost=req.headers.host.replace('school.','schoolapi.')
    const favicon = req.protocol+'://'+apihost+'/api/profile/logo?width=16&height=16'
    console.log('Get request now just came: ' + req.url)
    fetch = apifetch
    fetch = (function (origFetch) {
        return function myFetch() {
            arguments[1].headers.ClientHost = req.headers.host.indexOf(':')!==-1?req.headers.host.substr(0,req.headers.host.indexOf(':')):req.headers.host
            console.log('arguments='+require('util').inspect(arguments, false, null))
            var result = origFetch.apply(this, arguments)
            return result
        }
    })(fetch)

    if (req.url.indexOf('.') !== -1) {
        console.log('Send File: ' + __dirname + req.url)
        var file = __dirname + req.url
        fs.readFile(file, function (err, data) {
            if (err) {
                res.status(200).sendFile(errorfile)
            } else
                res.end(data, 'binary')
        })

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
                const initialState = {}
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
                        var d = new Date()
                        var hour = d.getHours()
                        var vendorBundle = 'http://rlearn.herokuapp.com/vendor.bundle.js'
                        var publicbundle = assets.publicapp.js //'/app.js'
                        var appstyle = assets.app.css // '/app.css'

                        vendorBundle = assets.vendor.js //'/vendor.bundle.js'
                        const state = store.getState()
                        console.log('State paased to client = ' + JSON.stringify(state))
                        res.status(200).send(`<!DOCTYPE html>
              <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
                <script defer src="${vendorBundle}"></script>
                <script defer src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
                <script defer src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
                <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.brown-blue.min.css">
                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js"></script>
                <script src="https://cdn.jsdelivr.net/sockjs/1/sockjs.min.js"></script>
                <link rel="stylesheet" type="text/css" href="${appstyle}" />                
                <link rel="icon" href="${favicon}">
                </head>
                <body style="background-color:#2980b9">
                  <div id="root"><div>${body}</div></div>
                  <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
                  <script defer src="${publicbundle}"></script>
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

var port = (process.env.PORT || ApiConnection.expressPort)

app.listen(port, function (error) {
    console.log('Start Express server 1')
    if (error)
        throw error
    if (process.send) process.send('online')
    console.log('Express server listening on expressPort', port)
})

process.on('message', function (message) {
    if (message === 'shutdown') {
        // performCleanup()
        process.exit(0)
    }
})
