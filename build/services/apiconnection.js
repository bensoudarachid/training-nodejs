'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var version = require('./version.js');
var apiport = 8083; // default for development

var ApiConnection = function () {
    function ApiConnection() {
        _classCallCheck(this, ApiConnection);

        console.log('version=' + require('util').inspect(version, false, null));

        var port = -12;
        var appbasename = '';
        if (process.env.NODE_ENV === 'production') {
            port = 8082;
            appbasename = '/training-' + version.appversion;
        } else {
            port = 8081;
            // appbasename = '/training-'+version.appversion
        }
        var isBrowser = typeof window !== 'undefined';

        if (process.env.NODE_ENV === 'production') {
            if (isBrowser && window.location.protocol == 'https:') // both the same: isBrowser in production means also window.location.protocol has to be == 'https:'
                apiport = 9083; //Apache cluster ssl port
            else //the node server wants to call apache
                apiport = 8088; //Apache cluster normal port
        }

        var url = '';
        var authurl = '';
        // const appbasename = '/reactor'
        // const appbasename = version.
        if (isBrowser) {
            console.log('APIConnection. Window.location.protocol=' + require('util').inspect(window.location.protocol, false, null));

            // if( window.location.protocol == 'https:' )
            //   apiport = 9083
            // else
            //   apiport = 8083

            if (window.location.hostname == 'rlearn.herokuapp.com')
                // authurl= window.location.protocol+'//reactlearning.royasoftware.com:'+apiport
                authurl = window.location.protocol + '//reactlearning.school.royasoftware.com:' + apiport;else authurl = window.location.protocol + '//' + window.location.hostname + ':' + apiport;
            // url = authurl
            console.log('services call url ' + url);
        } else {
            authurl = undefined;
            // url = 'http:'+'//'+'127.0.0.1'+(port ? ':'+port: '')+appbasename
            console.log('services call local url. we dont have that because we need a subdomain');
        }
        url = authurl;
        this.apiurl = url;
        this.port = port;
        this.appbasename = appbasename;
        // this.apiport=apiport
    }

    _createClass(ApiConnection, [{
        key: 'getApiConnection',
        value: function getApiConnection(hostname) {
            if (hostname == 'rlearn.herokuapp.com')
                // return 'https://reactlearning.royasoftware.com:9083'
                return 'https://reactlearning.school.royasoftware.com:' + apiport;else {
                console.log('Get Api connection: ' + 'http://' + hostname + ':' + apiport);
                return 'http://' + hostname + ':' + apiport;
            }
            // return 'http://127.0.0.1:8083' //not helpful to resolve single tenants on server side calls
        }
    }]);

    return ApiConnection;
}();

exports.default = new ApiConnection();