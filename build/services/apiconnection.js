"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var version = require('./version.js');
var apiport = 8088;

var dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;

JSON.dateParser = function (key, value) {
    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
    }
    return value;
};

JSON.parseWithDate = function (json) {
    var parse = JSON._parseSaved ? JSON._parseSaved : JSON.parse;
    try {
        var res = parse(json, JSON.dateParser);
        return res;
    } catch (e) {
        throw new Error("JSON content could not be parsed");
    }
};

JSON.useDateParser = function (reset) {
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

    JSON.useDateParser();
    var expressPort = -12;
    var appbasename = '';
    if (process.env.NODE_ENV === 'production') {
        expressPort = 8081;
        // appbasename = '/training-' + version.appversion
    } else {
        expressPort = 8081;
    }
    if (process.env.NODE_ENV === 'production') {
        if (process.env.BROWSER && window.location.protocol == 'https:') apiport = 9083;else apiport = 80;
    }
    var url = '';
    var authurl = '';
    if (process.env.BROWSER) {
        var apiHostname = window.location.hostname.replace("school.", "schoolapi.");
        authurl = window.location.protocol + '//' + apiHostname + ':' + apiport;
    } else {
        if (process.env.TRAINING_API_LOCAL_IP != undefined) {
            authurl = 'http://' + process.env.TRAINING_API_LOCAL_IP + ':8080';
        } else authurl = undefined;
    }
    url = authurl;
    this.apiurl = url;
    this.expressPort = expressPort;
    this.appbasename = appbasename;
};

exports.default = new ApiConnection();