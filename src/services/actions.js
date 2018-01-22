import {getIsFetching} from './rootreducer'
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
    ...appservices,
    ...authservices,
    ...todoservices,
    ...trainingservices,
    ...appactions,
    ...authactions,
    ...todoactions,
    ...trainingactions
}

export default actions