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
import appservices from './app/appservices'

const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

let actions = {
// apiurl:url,
// expressPort:expressPort,
// appbasename:appbasename,
    ...appservices,
    ...authservices,
    ...todoservices,
    ...trainingservices,
    ...appactions,
    ...authactions,
// ...registeractions,
    ...todoactions,
    ...trainingactions
}

// JSON.useDateParser()

export default actions