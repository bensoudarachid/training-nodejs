import Immutable from 'immutable'

let appReducer = function (app = new Immutable.Map({
    appError: undefined,
    previouslocation: undefined,
    serverDataFetched: true
}), action) {
    if (!(app instanceof Immutable.Map)) {
        console.log('App reducer. Init Map. Need to find out why it s not a map')
        app = new Immutable.Map({
            appError: '',
            previouslocation: undefined,
            serverDataFetched: true
        })
    }

    switch (action.type) {
        case 'APP_DO_NOTHING':
            return app

        case 'NEED_ACTION_CONFIRMATION':
            if (action.boolValue) {
                app = app.set('confirmationActionFunction', action.actionFunction)
                app = app.set('confirmationActionParams', action.actionParams)
            } else {
                app = app.remove('confirmationActionFunction')
                app = app.remove('confirmationActionParams')
            }
            return app
        case 'APP_ERROR':
            app = app.set('appError', action.error)
            return app

        case 'APP_PREVIOUS_LOCATION':
            app = app.set('previouslocation', action.previouslocation)
            return app

        case 'SERVER_DATA_FETCH_STATUS':
            console.log('app reducer. +++++++++++++ SERVER_DATA_FETCH_STATUS ' + action.serverDataFetchOk)
            app = app.set('serverDataFetched', action.serverDataFetchOk)
            return app

        case 'TENANT_LOADED':
            app = app.set('tenant', Immutable.Map(action.tenant))
            return app

        default:
            return app
    }
}

export default appReducer