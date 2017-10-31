"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var version = require('./version.js');
var apiport = 8088; // default for development

//JSON parser date polyfill. Thx to https://weblog.west-wind.com/posts/2014/jan/06/javascript-json-date-parsing-and-real-dates
var dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;

JSON.dateParser = function (key, value) {
    // console.log('JSON test reviver ky=' + require('util').inspect(key, false, null) + ', value=' + require('util').inspect(value, false, null))
    if (typeof value === "string" && dateFormat.test(value)) {
        // console.log('JSON reviver key='+require('util').inspect(key, false, null)+'value='+require('util').inspect(value, false, null))
        return new Date(value);
    }
    return value;
    // if (key == 'start' || key == 'end') {
    //     // console.log('reviver key=' + require('util').inspect(key, false, null))
    //     // console.log('reviver value=' + require('util').inspect(value, false, null))
    //     return new Date(value)
    // } else {
    //     return value
    // }
};

JSON.parseWithDate = function (json) {
    /// <summary>
    /// Wrapper around the JSON.parse() function that adds a date
    /// filtering extension. Returns all dates as real JavaScript dates.
    /// </summary>
    /// <param name="json" type="string">JSON to be parsed</param>
    /// <returns type="any">parsed value or object</returns>
    var parse = JSON._parseSaved ? JSON._parseSaved : JSON.parse;
    try {
        var res = parse(json, JSON.dateParser);
        return res;
    } catch (e) {
        // orignal error thrown has no error message so rethrow with message
        throw new Error("JSON content could not be parsed");
    }
};

JSON.useDateParser = function (reset) {
    /// <summary>
    /// Globally enables JSON date parsing for JSON.parse().
    /// replaces the default JSON parser with parse plus dateParser extension
    /// </summary>
    /// <param name="reset" type="bool">when set restores the original JSON.parse() function</param>

    // if any parameter is passed reset
    if (typeof reset != "undefined") {
        if (JSON._parseSaved) {
            JSON.parse = JSON._parseSaved;
            JSON._parseSaved = null;
        }
    } else {
        if (!JSON.parseSaved) {
            JSON._parseSaved = JSON.parse;
            JSON.parse = JSON.parseWithDate;
        }
    }
};

var ApiConnection = function ApiConnection() {
    _classCallCheck(this, ApiConnection);

    console.log('version=' + require('util').inspect(version, false, null));
    JSON.useDateParser();
    var expressPort = -12;
    var appbasename = '';
    if (process.env.NODE_ENV === 'production') {
        // expressPort = 8082
        expressPort = 8081;
        // appbasename = '/training-' + version.appversion
    } else {
        expressPort = 8081;
        // appbasename = '/training-'+version.appversion
    }
    // var isBrowser = typeof window !== 'undefined'

    if (process.env.NODE_ENV === 'production') {
        if (process.env.BROWSER && window.location.protocol == 'https:') // both the same: isBrowser in production means also window.location.protocol has to be == 'https:'
            // apiport = 9083 //Apache cluster ssl expressPort
            apiport = 443; //Apache cluster ssl expressPort
        else //the node server wants to call apache
            // apiport = 80 //Apache cluster normal expressPort
            apiport = 8080;
    }

    var url = '';
    var authurl = '';
    // const appbasename = '/reactor'
    // const appbasename = version.
    if (process.env.BROWSER) {
        console.log('APIConnection. Window.location.protocol=' + require('util').inspect(window.location.protocol, false, null));

        // if( window.location.protocol == 'https:' )
        //   apiport = 9083
        // else
        //   apiport = 8083
        // if (window.location.hostname == 'rlearn.herokuapp.com')
        // // authurl= window.location.protocol+'//reactlearning.royasoftware.com:'+apiport
        //     authurl = window.location.protocol + '//reactlearning.school.royasoftware.com:' + apiport
        // else
        var apiHostname = window.location.hostname.replace("school.", "schoolapi.");
        authurl = window.location.protocol + '//' + apiHostname + ':' + apiport;
        // authurl = window.location.protocol + '//' + '127.0.0.1' + ':' + apiport
        // url = authurl
        //            console.log('services call url ' + url)
    } else {
        if (process.env.TRAINING_API_LOCAL_IP != undefined) {
            authurl = 'http://' + process.env.TRAINING_API_LOCAL_IP + ':8080';
            // port = 8080
        } else authurl = undefined;
        // url = 'http:'+'//'+'127.0.0.1'+(expressPort ? ':'+expressPort: '')+appbasename
        console.log('services call local url. we dont have that because we need a subdomain');
    }
    url = authurl;
    this.apiurl = url;
    this.expressPort = expressPort;
    this.appbasename = appbasename;
    // this.apiport=apiport
}

// reviver(key, value) {
//     console.log('test reviver ky=' + require('util').inspect(key, false, null) + ', value=' + require('util').inspect(value, false, null))
//     // if (key == 'start' || key == 'end') {
//     //     // console.log('reviver key=' + require('util').inspect(key, false, null))
//     //     // console.log('reviver value=' + require('util').inspect(value, false, null))
//     //     return new Date(value)
//     // } else {
//     //     return value
//     // }
//
//     if (typeof value === "string" && dateFormat.test(value)) {
//         console.log('reviver key='+require('util').inspect(key, false, null))
//         console.log('reviver value='+require('util').inspect(value, false, null))
//
//         return new Date(value)
//     }
//     return value
// }

// getApiConnection(hostname) {
//     console.log('process.env.TRAINING_API_LOCAL_IP='+require('util').inspect(process.env.TRAINING_API_LOCAL_IP, false, null))
//     var port = apiport;
//     if (!process.env.BROWSER && process.env.TRAINING_API_LOCAL_IP!=undefined) {
//         hostname = process.env.TRAINING_API_LOCAL_IP
//         port = 8080
//         console.log('hostname='+require('util').inspect(hostname, false, null))
//     }else
//     // const apiHostname = hostname.replace("school.", "schoolapi.");
//         hostname = hostname.replace("school.", "schoolapi.");
//     console.log('3. Get Api connection: '+'http://' + hostname + ':' + port)
//
//     return 'http://' + hostname + ':' + port
//     // return 'http://' + '127.0.0.1' + ':' + apiport
//     // }
//     // return 'http://127.0.0.1:8083' //not helpful to resolve single tenants on server side calls
// }
;

exports.default = new ApiConnection();