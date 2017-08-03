compileBackEnd(startExpress);

function compileBackEnd(callback) {
    require('babel-register')({ignore: ['/node_modules/', 'wahnsinn'], presets: ['es2015']});
    callback();
};

function startExpress() {
    var app = require('./server4.js');
    var debug = require('debug')('BASE-FOLDER-NAME:server');
    var http = require('http'); //* ALL OTHER CODE FROM THIS FILE SHOULD COME HERE *
}