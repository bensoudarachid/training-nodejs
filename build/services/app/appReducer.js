'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = function appReducer() {
    var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _immutable2.default.Map({
        appError: undefined,
        previouslocation: undefined,
        serverDataFetched: true
    });
    var action = arguments[1];

    if (!(app instanceof _immutable2.default.Map)) {
        console.log('App reducer. Init Map. Need to find out why it s not a map');
        app = new _immutable2.default.Map({
            appError: '',
            previouslocation: undefined,
            serverDataFetched: true
        });
    }

    switch (action.type) {
        case 'APP_DO_NOTHING':
            return app;

        case 'NEED_ACTION_CONFIRMATION':
            if (action.boolValue) {
                app = app.set('confirmationActionFunction', action.actionFunction);
                app = app.set('confirmationActionParams', action.actionParams);
            } else {
                app = app.remove('confirmationActionFunction');
                app = app.remove('confirmationActionParams');
            }
            return app;
        case 'APP_ERROR':
            app = app.set('appError', action.error);
            return app;

        case 'APP_PREVIOUS_LOCATION':
            app = app.set('previouslocation', action.previouslocation);
            return app;

        case 'SERVER_DATA_FETCH_STATUS':
            console.log('app reducer. +++++++++++++ SERVER_DATA_FETCH_STATUS ' + action.serverDataFetchOk);
            app = app.set('serverDataFetched', action.serverDataFetchOk);
            return app;

        case 'TENANT_LOADED':
            app = app.set('tenant', _immutable2.default.Map(action.tenant));
            return app;

        default:
            return app;
    }
};

exports.default = appReducer;