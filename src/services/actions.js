import {browserHistory} from 'react-router'
import {getIsFetching} from './rootreducer'
import Immutable from 'immutable'
import cookie from 'react-cookie'
import todoactions from './todos/todoactions'
import trainingactions from './trainings/trainingactions'
import authservices from './app/authentication/authservices'
import todoservices from './todos/todoservices'
import trainingservices from './trainings/trainingservices'
import authactions from './app/authentication/authactions'
import appactions from './app/appactions'


const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

// JSON.dateParser= function(key, value) {
//     console.log('JSON test reviver ky=' + require('util').inspect(key, false, null) + ', value=' + require('util').inspect(value, false, null))
//     // if (key == 'start' || key == 'end') {
//     //     // console.log('reviver key=' + require('util').inspect(key, false, null))
//     //     // console.log('reviver value=' + require('util').inspect(value, false, null))
//     //     return new Date(value)
//     // } else {
//     //     return value
//     // }
//
//     if (typeof value === "string" && dateFormat.test(value)) {
//         console.log('JSON reviver key='+require('util').inspect(key, false, null))
//         console.log('JSON reviver value='+require('util').inspect(value, false, null))
//
//         return new Date(value)
//     }
//     return value
// }
//
// JSON.parseWithDate = function(json) {
//     /// <summary>
//     /// Wrapper around the JSON.parse() function that adds a date
//     /// filtering extension. Returns all dates as real JavaScript dates.
//     /// </summary>
//     /// <param name="json" type="string">JSON to be parsed</param>
//     /// <returns type="any">parsed value or object</returns>
//     var parse = JSON._parseSaved ? JSON._parseSaved : JSON.parse;
//     try {
//         var res = parse(json, JSON.dateParser);
//         return res;
//     } catch (e) {
//         // orignal error thrown has no error message so rethrow with message
//         throw new Error("JSON content could not be parsed");
//     }
// }
//
// JSON.useDateParser = function(reset) {
//     /// <summary>
//     /// Globally enables JSON date parsing for JSON.parse().
//     /// replaces the default JSON parser with parse plus dateParser extension
//     /// </summary>
//     /// <param name="reset" type="bool">when set restores the original JSON.parse() function</param>
//
//     // if any parameter is passed reset
//     if (typeof reset != "undefined") {
//         if (JSON._parseSaved) {
//             JSON.parse = JSON._parseSaved;
//             JSON._parseSaved = null;
//         }
//     } else {
//         if (!JSON.parseSaved) {
//             JSON._parseSaved = JSON.parse;
//             JSON.parse = JSON.parseWithDate;
//         }
//     }
// }

let actions = {
// apiurl:url,
// expressPort:expressPort,
// appbasename:appbasename,
    ...
        authservices,
    ...
        todoservices,
    ...
        trainingservices,
    ...
        appactions,
    ...
        authactions,
// ...registeractions,
    ...
        todoactions,
    ...
        trainingactions
}

// JSON.useDateParser()

export default actions