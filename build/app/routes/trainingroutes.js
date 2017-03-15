'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _trainingapp = require('../../scenes/training/trainingapp');

var _trainingapp2 = _interopRequireDefault(_trainingapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import TrainingEdit from '../../scenes/training/admin/trainingedit'

var trainingRoutes = _react2.default.createElement(
  _reactRouter.Route,
  { path: 'trainings', getChildRoutes: function getChildRoutes(location, cb) {
      cb(null, [_react2.default.createElement(_reactRouter.Route, { path: 'item/:id', component: require('../../scenes/training/admin/trainingedit.js').default })]);
    } },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _trainingapp2.default })
);
// const trainingRoutes = {
//   path: 'item/:id',
//   component: TrainingEdit
// } 

exports.default = trainingRoutes;
// <Route path="trainings">
//   <IndexRoute component={TrainingApp}/>
//   <Route path="item/:id" component={TrainingEdit} />
// </Route>