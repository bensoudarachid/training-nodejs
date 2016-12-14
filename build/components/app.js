'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _todoapp = require('./todoapp');

var _todoapp2 = _interopRequireDefault(_todoapp);

var _userapp = require('./userapp');

var _userapp2 = _interopRequireDefault(_userapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var Link = require('react-router').Link;
// var IndexLink = require('react-router').IndexLink;
// var hashHistory = require('react-router').hashHistory;
// var browserHistory = require('react-router').Link;
// var IndexRoute = require('react-router').IndexRoute;

// var TodoApp = require('./todoapp');
// var UserApp = require('./userapp');

// if (process.env.BROWSER) {
require('./nav.scss');
// }

var Home = function Home(props) {
  return _react2.default.createElement(
    'div',
    null,
    'Hey there ',
    _react2.default.createElement('br', null),
    props.title,
    _react2.default.createElement('br', null),
    props.subTitle
  );
};
var Title = function Title() {
  return _react2.default.createElement(
    'h1',
    null,
    'Hello from Title Component'
  );
};
var SubTitle = function SubTitle() {
  return _react2.default.createElement(
    'h1',
    null,
    'Hello from SubTitle Component'
  );
};
// const Address = () => <h1>We are located at 555 Jackson St.</h1>
var About = function About(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Welcome to the About page: ',
      props.params.name
    )
  );
};

var Address = function Address(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactRouter.Link,
      { onlyActiveOnIndex: true, activeClassName: 'active', to: '/address' },
      'Twitter Feed'
    ),
    ' ',
    _react2.default.createElement(
      _reactRouter.Link,
      { activeClassName: 'active', to: '/address/instagram' },
      'Instagram Feed'
    ),
    _react2.default.createElement(
      'h1',
      null,
      'We are located at 555 Jackson St.'
    ),
    props.children
  );
};

var Instagram = function Instagram() {
  return _react2.default.createElement(
    'h3',
    null,
    'Instagram Feed'
  );
};
var TwitterFeed = function TwitterFeed() {
  return _react2.default.createElement(
    'h3',
    null,
    'Twitter Feed'
  );
};
var NotFound = function NotFound() {
  return _react2.default.createElement(
    'h1',
    null,
    '404.. This page is not found!'
  );
};

// const Nav = () => (
//   <div>
//     <IndexLink activeClassName='active' to='/home'>Home</IndexLink>&nbsp;
//     <Link activeClassName='active' to='/address'>Address</Link>
//     <Link activeClassName='active' to='/todos'>Todos</Link>
//     <Link activeClassName='active' to='/userapp'>Users</Link>
//     <Link activeClassName='active' to='/about'>About</Link>
//   </div>
// )

var Container = function Container(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Nav, null),
    props.children
  );
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        _react2.default.createElement(
          _reactRouter.Route,
          { path: '/', component: Container },
          _react2.default.createElement(
            _reactRouter.Route,
            { path: 'home', component: Home },
            _react2.default.createElement(_reactRouter.IndexRoute, { components: { title: Title, subTitle: SubTitle } })
          ),
          _react2.default.createElement(_reactRouter.Route, { path: '/todos', component: _todoapp2.default }),
          _react2.default.createElement(_reactRouter.Route, { path: '/userapp', component: _userapp2.default }),
          _react2.default.createElement(
            _reactRouter.Route,
            { path: '/address', component: Address },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: TwitterFeed }),
            _react2.default.createElement(_reactRouter.Route, { path: 'instagram', component: Instagram })
          ),
          _react2.default.createElement(_reactRouter.Route, { path: '/about(/:name)', component: About }),
          _react2.default.createElement(_reactRouter.Route, { path: '*', component: NotFound })
        )
      );
    }
  }]);

  return App;
}(_react.Component);
// class App extends Component {
//   render() {
//     return (
//       <div id="app-view">
//         <h1>App view</h1>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// export default(
//   <Router history={browserHistory}>
//       <Route path = '/' component={Container}>
//           <Route path='home' component={Home}>
//             <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
//           </Route>
//           <Route path='/todos' component={TodoApp} />
//           <Route path='/userapp' component={UserApp} />
//           <Route path='/address' component={Address}>
//               <IndexRoute component={TwitterFeed} />
//               <Route path='instagram' component={Instagram} />
//           </Route>
//           <Route path='/about(/:name)' component={About} />
//           <Route path='*' component={NotFound} />
//       </Route>
//   </Router>
// );


// function mapStateToProps(state) {
//   return state
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

exports.default = App;
// export default connect( mapStateToProps, mapDispatchToProps )(App)