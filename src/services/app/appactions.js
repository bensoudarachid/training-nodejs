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
    }

}

export default appactions