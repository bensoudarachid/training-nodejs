import ApiConnection from '../apiconnection'

import actions from '../actions'

let appactions = {
    appDoNothing: function () {
        return {
            type: 'APP_DO_NOTHING',
        }
    },

    needActionConfirmation: function (boolValue, actionFunction, actionParams) {
        return {
            type: 'NEED_ACTION_CONFIRMATION',
            boolValue,
            actionFunction,
            actionParams
        }
    },

    callActionConfirmation: function (boolValue, actionFunction, actionParams) {
        return (dispatch, getState) => {
            const func = getState().app.get('confirmationActionFunction')
            const params = getState().app.get('confirmationActionParams')
            func(params)
            dispatch(actions.needActionConfirmation(false))
        }
    },

    appError: function (error) {
        return {
            type: 'APP_ERROR',
            error
        }
    },

    savePreviousLocation: function (prevlocation) {
        return {
            type: 'APP_PREVIOUS_LOCATION',
            previouslocation: prevlocation
        }
    },

    serverDataFetch: function (isOk) {
        return {
            type: 'SERVER_DATA_FETCH_STATUS',
            serverDataFetchOk: isOk,
        }
    },

    loadTenant: function (tenantraw) {
        return {
            type: 'TENANT_LOADED',
            tenant: tenantraw
        }
    },

    retrieveTenantDispatcher: function () {
        console.log('Call retrieve Tenant Dispatcher  <-----------------------------')
        // console.log('training actions. retrieveTrainingDispatcher')
        // console.log('rootreducer='+require('util').inspect(rootreducer, false, null))
        return (dispatch, getState) => {
            // if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
            //     return
            return actions.retrieveTenantService()
                .then(
                    ({status, data}) => {
                        if (status >= 400) {
                            var error = data
                            console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                            // dispatch(actions.receiveLogout())
                            dispatch(actions.loadTenant({}))
                        } else if (data.error) {
                            // var error = data.error
                            var errorDescription = data.error_description
                            console.log('Tenant fetch error = ' + data.error + ', description = ' + errorDescription)
                            // dispatch(actions.loadEditTraining({}))
                            dispatch(actions.loadTenant({}))
                        } else {
                            dispatch(actions.loadTenant(data))
                        }
                    })
                .catch(err => {
                    console.log('tenantactions.js retrieveTenant Dispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null))
                    if (err.code == 'ENOENT') {
                        console.log('actions.js. YEAH! getaddrinfo ENOENT error is there')
                        dispatch(actions.serverDataFetch(false))
                    }
                })

        }
    }

}

export default appactions