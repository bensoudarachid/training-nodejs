webpackJsonp([3],{78:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(2),d=n(c);l(82);var s=function(e){function t(e){o(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.changeInputText=l.changeInputText.bind(l),l}return r(t,e),i(t,[{key:"render",value:function(){var e=this.props.id,t=this.props.disabled?"disabled":"";return d.default.createElement("div",{className:"file_input_div"},d.default.createElement("div",{className:"file_input"},d.default.createElement("label",{className:"justify image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored"+t},d.default.createElement("span",{className:"glyphicon glyphicon-upload "+t}),d.default.createElement("input",{ref:"file_input_file",onChange:this.changeInputText,className:"none",type:"file",id:e,disabled:this.props.disabled})),d.default.createElement("label",{className:"uploadlabel",ref:"file_input_text",name:"file_input_text"},"No image")))}},{key:"componentDidMount",value:function(){l(8).upgradeDom();var e=this.refs.file_input_file;e.addEventListener("change",this.changeInputText),e.addEventListener("change",this.changeState)}},{key:"changeInputText",value:function(e){e.preventDefault();var t=this.refs.file_input_file,l=this.refs.file_input_text,n=t.value;""==n&&(n="No Image");var o;n.lastIndexOf("\\")?o=n.lastIndexOf("\\")+1:n.lastIndexOf("/")&&(o=n.lastIndexOf("/")+1),l.innerHTML=n.slice(o,n.length)}}]),t}(c.Component);t.default=s},82:function(e,t){},242:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(2),d=n(c);l(281);var s=function(e){function t(e){o(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={error:null},l}return r(t,e),i(t,[{key:"render",value:function(){var e=this.state.error?"error":"";return d.default.createElement("div",{id:"todocreate",className:"mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("form",{className:"mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone",onSubmit:this.handleCreate.bind(this)},d.default.createElement("div",{className:"mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone"},d.default.createElement("div",{className:"mdl-textfield tf mdl-js-textfield"},d.default.createElement("input",{className:"mdl-textfield__input",type:"text",ref:"createInput",id:"createInput"}),d.default.createElement("label",{className:"mdl-textfield__label",htmlFor:"createInput"},"New todo..."))),d.default.createElement("div",{className:"editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone"},d.default.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items"},"Create"))),d.default.createElement("div",{className:"bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("div",{className:e},this.state.error)))}},{key:"handleCreate",value:function(e){e.preventDefault();var t=this.refs.createInput,l=t.value,n=this.validateInput(l);return n?(this.setState({error:n}),void setTimeout(function(){this.setState({error:null})}.bind(this),3e3)):(this.setState({error:null}),this.props.actions.createTodo(l),void(this.refs.createInput.value=""))}},{key:"validateInput",value:function(e){return e?this.props.todos.find(function(t){return t.get("task")===e})?"Task already exists.":null:"Please enter a task."}}]),t}(d.default.Component);t.default=s},243:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(2),d=n(c),s=l(12),u=n(s),p=l(13),f=n(p),m=l(6),h=n(m),b=function(e){function t(e){o(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={imageLoaded:void 0},l}return r(t,e),i(t,[{key:"render",value:function(){var e=this.props.taskid,t=(this.props.isUploading,u.default.load("jwt"));return d.default.createElement("div",{className:"imgwrapper",id:"imgwrap"+e},d.default.createElement("div",{className:"mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"}),d.default.createElement("img",{id:"todolistitemimg"+e,src:"./images/0.png","data-src":f.default.apiurl+"/api/todo/img/"+e+"?access_token="+t,onLoad:this.handleImageLoaded.bind(this),onError:this.handleImageErrored.bind(this),className:"dataimg",alt:"coding"}))}},{key:"componentDidMount",value:function(){l(8).upgradeDom()}},{key:"componentDidUpdate",value:function(){l(8).upgradeAllRegistered();var e=this.props.taskid,t=(0,h.default)("#imgwrap"+e),n=t.find(".dataimg"),o=n[0];if(0==this.props.isUploading){var a=u.default.load("jwt");o.setAttribute("data-src",f.default.apiurl+"/api/todo/img/"+e+"?access_token="+a+"&param="+Math.floor(1e4*Math.random()))}if(o.hasAttribute("data-src")){var r=t.find(".mdl-spinner");r[0].style.display="block",o.style.display="none",o.setAttribute("src",o.getAttribute("data-src")),o.removeAttribute("data-src")}}},{key:"handleImageLoaded",value:function(){var e=this.props.taskid,t=(0,h.default)("#imgwrap"+e),l=t.find(".mdl-spinner"),n=t.find(".dataimg"),o=n[0];o.hasAttribute("data-src")?this.setState({imageLoaded:!0}):(o.style.display="block","./images/0.png"!=o.getAttribute("src")&&(o.style.background="radial-gradient(circle closest-side at 50% 50%, white 0,  #69F 95%, transparent 100%)"),l[0].style.display="none")}},{key:"handleImageErrored",value:function(){var e=this.props.taskid,t=(0,h.default)("#imgwrap"+e),l=t.find(".mdl-spinner"),n=t.find(".dataimg"),o=n[0];l[0].style.display="none",o.setAttribute("src","./images/0.png")}},{key:"shouldComponentUpdate",value:function(e,t){var l=this.props.taskid,n=(0,h.default)("#imgwrap"+l),o=n.find(".dataimg"),a=o[0];return!!(a.hasAttribute("data-src")||this.props.isUploading&&!a.hasAttribute("data-src"))}}]),t}(d.default.Component);t.default=b},244:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(2),d=n(c);l(282);var s=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),i(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--3-col-phone"},d.default.createElement("div",{id:"todosfilter",className:"mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("div",{className:"mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone checkboxinput"},d.default.createElement("label",{className:"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect",htmlFor:"checkbox1"},d.default.createElement("input",{type:"checkbox",id:"checkbox1",className:"bgo mdl-checkbox__input",ref:"filterTodosOpen",defaultChecked:this.props.filteropen,onClick:this.handleFilterOpen.bind(this)}),d.default.createElement("span",{className:"mdl-checkbox__label"},"Open"))),d.default.createElement("div",{className:"mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone"},d.default.createElement("label",{className:"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkboxinput",htmlFor:"checkbox2"},d.default.createElement("input",{type:"checkbox",id:"checkbox2",className:"bgr mdl-checkbox__input",ref:"filterTodosClosed",defaultChecked:this.props.filterclosed,onClick:this.handleFilterClosed.bind(this)}),d.default.createElement("span",{className:"mdl-checkbox__label"},"Closed")))))}},{key:"renderOld",value:function(){return d.default.createElement("div",{id:"todosfilter"},d.default.createElement("p",null,"open"),d.default.createElement("input",{type:"checkbox",ref:"filterOpen",defaultChecked:this.props.filteropen,onClick:this.handleFilterOpen.bind(this)}),d.default.createElement("p",null,"closed"),d.default.createElement("input",{type:"checkbox",ref:"filterTodosClosed",defaultChecked:this.props.filterclosed,onClick:this.handleFilterClosed.bind(this)}))}},{key:"handleFilterOpen",value:function(e){var t=e.target.checked;this.props.actions.filterTodosOpen(t)}},{key:"handleFilterClosed",value:function(e){var t=e.target.checked;this.props.actions.filterTodosClosed(t)}},{key:"validateInput",value:function(e){return e?this.props.todos.find(function(t){return t.get("task")===e})?"Task already exists":null:"Please enter a task."}}]),t}(d.default.Component);t.default=s},245:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(2),d=n(c),s=l(15),u=n(s),p=l(246),f=n(p),m=l(36),h=n(m);l(283);var b=function(e){function t(e){o(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.shouldComponentUpdate=h.default.shouldComponentUpdate.bind(l),l}return r(t,e),i(t,[{key:"componentDidMount",value:function(){l(8).upgradeDom()}},{key:"componentDidUpdate",value:function(){l(8).upgradeAllRegistered()}},{key:"getItems",value:function(){var e=this;return this.props.todos?this.props.todos.filter(function(t){return t.get("completed")&&e.props.filterclosed||!t.get("completed")&&e.props.filteropen}):u.default.List([])}},{key:"renderItems",value:function(){var e=this,t=this.getItems();return t.map(function(t,l){return d.default.createElement(f.default,{ind:l,todo:t,actions:e.props.actions})})}},{key:"render",value:function(){return d.default.createElement("div",{className:"todoslist"},void 0==this.props.todos?d.default.createElement("div",{className:"mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active",style:{width:"55px",height:"55px"}}):d.default.createElement("span",null,this.renderItems()))}}]),t}(d.default.Component);t.default=b},246:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(2),d=n(c),s=l(12),u=n(s),p=l(44),f=(n(p),l(78)),m=n(f),h=l(13),b=(n(h),l(6)),v=(n(b),l(243)),g=n(v);l(284);var y=function(e){function t(e){o(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={isEditing:!1},l}return r(t,e),i(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("div",{className:"mdl-grid todoslistitem blockborder center-items"},this.renderTaskForm()))}},{key:"componentDidMount",value:function(){l(8).upgradeDom()}},{key:"componentDidUpdate",value:function(){l(8).upgradeDom();for(var e=document.querySelectorAll(".mdl-textfield"),t=0,n=e.length;t<n;t++)e[t].MaterialTextfield.checkDirty();var o=this.props.ind;!this.state.hadFocus&&document.getElementById("taskInput"+o)&&(document.getElementById("taskInput"+o).focus(),this.setState({hadFocus:!0}))}},{key:"handleDelete",value:function(){this.props.actions.deleteTodoSrv(this.props.todo)}},{key:"handleUploadFile",value:function(e){e.preventDefault();var t=(u.default.load("jwt"),this.props.todo.get("id")),l=document.querySelector("#uploadfile-"+t),n=this.props.todo.set("mama","i m here");this.props.actions.uploadTodoFileDispatcher(n,this.props.todo,l.files[0])}},{key:"handleToggle",value:function(e){e.preventDefault();var t=this.props.todo.set("completed",!this.props.todo.get("completed"));this.setState({isEditing:!1}),this.props.actions.updateTodoDispatcher(t,this.props.todo)}},{key:"onSaveClick",value:function(e){e.preventDefault();var t=void 0;t=this.refs.taskInput.value;var l=this.props.todo.set("task",t);this.setState({isEditing:!1}),this.props.actions.updateTodoDispatcher(l,this.props.todo)}},{key:"onEditClick",value:function(){this.setState({isEditing:!0,hadFocus:!1})}},{key:"onCancelClick",value:function(){this.setState({isEditing:!1})}},{key:"renderTaskForm",value:function(){var e=(u.default.load("jwt"),this.props.todo.get("task")),t=this.props.todo.get("id"),l=this.props.ind,n=this.props.todo.get("completed"),o=this.props.todo.get("error"),a={color:n?"green":"red",cursor:"pointer"},r=this.props.todo.get("loading"),i=this.props.todo.get("isUploading"),c=r||o,s=o?"error":"",p=r?"center-items loading":"",f=r?d.default.createElement("div",{className:"loadingbar mdl-progress mdl-js-progress mdl-progress__indeterminate"}):"";return d.default.createElement("div",{className:"mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},this.state.isEditing?d.default.createElement("div",{className:"mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("form",{className:"pad mdl-grid mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone",onSubmit:this.onSaveClick.bind(this)},d.default.createElement("div",{className:"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("div",{className:"mdl-textfield tf mdl-js-textfield"},d.default.createElement("input",{className:"mdl-textfield__input",type:"text",defaultValue:e,name:"taskInput"+l,ref:"taskInput",id:"taskInput"+l}),d.default.createElement("label",{className:"mdl-textfield__label",htmlFor:"taskInput"+l},"Task...")))),d.default.createElement("div",{className:"editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone"},d.default.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items",onClick:this.onCancelClick.bind(this),disabled:c},"Cancel"),d.default.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored savebutton right-items",onClick:this.onSaveClick.bind(this),disabled:c},"Save"))):d.default.createElement("div",{className:"mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("div",{className:"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("div",{className:s},o)),d.default.createElement("div",{className:"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("div",{className:p},f)),d.default.createElement("form",{className:"pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone",onSubmit:this.onSaveClick.bind(this)},d.default.createElement("div",{className:"mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone",style:a,onClick:this.handleToggle.bind(this)},d.default.createElement("p",null,e))),d.default.createElement("div",{className:"editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone"},d.default.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items",onClick:this.handleDelete.bind(this),disabled:c},"Delete"),d.default.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items",onClick:this.onEditClick.bind(this),disabled:c},"Edit"))),d.default.createElement("div",{className:"mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},d.default.createElement("form",{className:"pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone",onSubmit:this.handleUploadFile.bind(this)},d.default.createElement("div",{className:"mdl-cell mdl-cell--7-col mdl-cell--6-col-tablet mdl-cell--2-col-phone"},d.default.createElement(m.default,{id:"uploadfile-"+this.props.todo.get("id"),disabled:c,actions:this.props.actions})),d.default.createElement("div",{className:"mdl-cell mdl-cell--5-col mdl-cell--2-col-tablet mdl-cell--2-col-phone"},d.default.createElement(g.default,{ref:"uploadcomp",taskid:t,isUploading:i}),d.default.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items",type:"submit",value:"Upload",disabled:c},"Upload")))))}}]),t}(d.default.Component);t.default=y},247:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(242),d=n(c),s=l(244),u=n(s),p=l(2),f=n(p),m=l(245),h=n(m),b=l(12),v=(n(b),l(36)),g=n(v);l(285);var y=function(e){function t(e){o(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.shouldComponentUpdate=g.default.shouldComponentUpdate.bind(l),l}return r(t,e),i(t,[{key:"componentDidMount",value:function(){t.fetchData(this.props.actions)}},{key:"render",value:function(){var e=!0;return e?f.default.createElement("div",{id:"todoapp"},f.default.createElement("div",null,f.default.createElement("div",{className:"mdl-grid mdl-grid--no-spacing blockborder parampanel"},f.default.createElement(u.default,{filteropen:this.props.todoappmap.get("filterOpen"),filterclosed:this.props.todoappmap.get("filterClosed"),actions:this.props.actions}),f.default.createElement(d.default,{todos:this.props.todoappmap.get("todos"),actions:this.props.actions})),f.default.createElement(h.default,{todos:this.props.todoappmap.get("todos"),filteropen:this.props.todoappmap.get("filterOpen"),filterclosed:this.props.todoappmap.get("filterClosed"),actions:this.props.actions}))):f.default.createElement("div",null)}},{key:"renderOld",value:function(){var e=!0;if(!e)return f.default.createElement("div",null);var t=this.props.auth;return f.default.createElement("div",{id:"todoapp"},!t.get("isAuthenticated")&&f.default.createElement("div",null,"No right access here. Please login"),t.get("isAuthenticated")&&f.default.createElement("div",null,f.default.createElement("div",{className:"mdl-grid mdl-grid--no-spacing blockborder parampanel"},f.default.createElement(u.default,{filteropen:this.props.todoappmap.get("filterOpen"),filterclosed:this.props.todoappmap.get("filterClosed"),actions:this.props.actions}),f.default.createElement(d.default,{todos:this.props.todoappmap.get("todos"),actions:this.props.actions})),f.default.createElement(h.default,{todos:this.props.todoappmap.get("todos"),filteropen:this.props.todoappmap.get("filterOpen"),filterclosed:this.props.todoappmap.get("filterClosed"),actions:this.props.actions})))}},{key:"handleCreate",value:function(e){e.preventDefault();var t=this.refs.createInput,l=t.value,n=this.validateInput(l);return n?void this.setState({error:n}):(this.setState({error:null}),this.props.actions.createTodo(l),void(this.refs.createInput.value=""))}},{key:"validateInput",value:function(e){return e?this.props.todos.find(function(t){return t.get("task")===e})?"Task already exists.":null:"Please enter a task."}},{key:"handleFilterOpen",value:function(e){var t=e.target.checked;this.props.actions.filterTodosOpen(t)}},{key:"handleFilterClosed",value:function(e){var t=e.target.checked;this.props.actions.filterTodosClosed(t)}},{key:"validateInput",value:function(e){return e?this.props.todos.find(function(t){return t.get("task")===e})?"Task already exists.":null:"Please enter a task."}},{key:"renderError",value:function(){return this.state.error?f.default.createElement("div",{style:{color:"red"}},this.state.error):null}}],[{key:"fetchData",value:function(e){e.retrieveUserTodosDispatcher()}}]),t}(p.Component);t.default=y},281:function(e,t){},282:function(e,t){},283:function(e,t){},284:function(e,t){},285:function(e,t){}});
//# sourceMappingURL=3.js.map