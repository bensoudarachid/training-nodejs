const version = require('./version.js')
var apiport = 8088

const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

JSON.dateParser = function (key, value) {
    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value)
    }
    return value
}

JSON.parseWithDate = function (json) {
    var parse = JSON._parseSaved ? JSON._parseSaved : JSON.parse;
    try {
        var res = parse(json, JSON.dateParser);
        return res;
    } catch (e) {
        throw new Error("JSON content could not be parsed");
    }
}

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
}

class ApiConnection {
    constructor() {
        JSON.useDateParser()
        var expressPort = -12
        var appbasename = ''
        if (process.env.NODE_ENV === 'production') {
            expressPort = 8081
            appbasename = '/training-' + version.appversion
        }
        else {
            expressPort = 8081
        }
        if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
<<<<<<< HEAD
            if (isBrowser && window.location.protocol == 'https:') // both the same: isBrowser in production means also window.location.protocol has to be == 'https:'
<<<<<<< HEAD
                apiport = 9083 //Apache cluster ssl port
<<<<<<< HEAD
            else //the node server wants to call apache 
=======
            else //the node server wants to call apache
>>>>>>> 6e3ff02... webstorm big changes crash
                apiport = 8088 //Apache cluster normal port
=======
                // apiport = 9083 //Apache cluster ssl expressPort
=======
            if (process.env.BROWSER && window.location.protocol == 'https:') // both the same: isBrowser in production means also window.location.protocol has to be == 'https:'
<<<<<<< HEAD
            // apiport = 9083 //Apache cluster ssl expressPort
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
                apiport = 443 //Apache cluster ssl expressPort
=======
                apiport = 9083 //Apache cluster ssl expressPort
                // apiport = 443 //Apache cluster ssl expressPort
>>>>>>> 7ac4e81... fix api connection ssl port
            else //the node server wants to call apache
<<<<<<< HEAD
<<<<<<< HEAD
                // apiport = 8088 //Apache cluster normal expressPort
                apiport = 80 //Apache cluster normal expressPort
>>>>>>> 391471a... adapt ports for openshift
=======
                apiport = 8088 //Apache cluster normal expressPort
=======
                apiport = 80 //Apache cluster normal expressPort
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 31fe258... Fix http port problem for production
                // apiport = 80 //Apache cluster normal expressPort
>>>>>>> dcab90a... Try to solve local calls from node.js to spring rest api in openshift
=======
            // apiport = 80 //Apache cluster normal expressPort
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
=======
            //apiport = 8080
>>>>>>> b6f02e5... uglify and remove console logs. Check if bug is still there on openshift
=======
            if (process.env.BROWSER && window.location.protocol == 'https:')
                apiport = 9083
            else
                apiport = 80
>>>>>>> f886b1f... clean code, remove console logs
        }
        var url = ''
        var authurl = ''
        if (process.env.BROWSER) {
            const apiHostname = window.location.hostname.replace("school.", "schoolapi.");
            authurl = window.location.protocol + '//' + apiHostname + ':' + apiport
        } else {
            if (process.env.TRAINING_API_LOCAL_IP != undefined) {
                authurl = 'http://' + process.env.TRAINING_API_LOCAL_IP + ':8080'
            }
            else
                authurl = undefined
        }
        url = authurl
        this.apiurl = url
        this.expressPort = expressPort
        this.appbasename = appbasename
    }
}

export default (new ApiConnection)
