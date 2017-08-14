webpackJsonp([10],{882:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return d});var s=t(9),c=t.n(s),i=t(194),l=t(294),p=t.n(l),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),u={props:t(979),dispatch:t(980),reducer:t(981),import:t(982)},d=function(e){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),m(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"migration-scene"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Migrating existing Redux applications"),c.a.createElement("p",null,"Since kea is just redux, it is very easy to connect it to an existing redux application."),c.a.createElement("h2",null,"Reading external data"),c.a.createElement("p",null,"You may pull in data from any part of the Redux tree with the Kea. For this you will use either the ",c.a.createElement("code",null,"@connect({ props: [] })")," helper or the ",c.a.createElement("code",null,"connect: { props: [] }")," option in the ",c.a.createElement("code",null,"@kea({})")," function."),c.a.createElement("p",null,"Instead of passing a kea logic store to ",c.a.createElement("code",null,"props")," you just pass a selector. Like so:"),c.a.createElement(p.a,{className:"javascript"},u.props),c.a.createElement("h2",null,"Using external actions"),c.a.createElement("p",null,"Kea always adds ",c.a.createElement("code",null,"dispatch")," as one of the props to your app, so you can easily call actions that are defined elsewhere."),c.a.createElement(p.a,{className:"javascript"},u.dispatch),c.a.createElement("p",null,"You may listen to other actions and either have them influence your reducers or run a saga when they happen. Just replace ",c.a.createElement("code",null,"actions.something")," with ",c.a.createElement("code",null,"MY_TYPE_CONSTANT"),", like so:"),c.a.createElement(p.a,{className:"javascript"},u.reducer),c.a.createElement("h2",null,"Using Kea actions and selectors elsewhere"),c.a.createElement("p",null,"If the redux-only part of your app needs access to some props or actions from kea logic stores, you can import them like so:"),c.a.createElement(p.a,{className:"javascript"},u.import),c.a.createElement("p",null,"The ",c.a.createElement(i.a,{to:"/api/logic"},"API docs")," describe what is available to import."),c.a.createElement("h2",null,"Next steps"),c.a.createElement("p",null,"That's it for the guide!"),c.a.createElement("p",null,"Check out the ",c.a.createElement(i.a,{to:"/examples/todos"},"example applications")," or read the ",c.a.createElement(i.a,{to:"/api/logic"},"API docs"),".")))}}]),n}(s.Component)},979:function(e,n){e.exports="import { connect } from 'kea'\n\nimport someLogic from './some-logic'\n\nconst railsContext = (state) => state.rails\n\n@connect({\n  props: [\n    someLogic, [\n      'prop1',\n      'prop2'\n    ],\n    railsContext, [\n      'i18nLocale',\n      'currentUserId'\n    ],\n    (state) => state.form.myForm, [\n      '* as myForm'\n    ]\n  ]\n})\nexport deafult const MyComponent extends Component {\n  render () {\n    const { prop1, prop2, i18nLocale, currentUserId, myForm } = this.props\n    // ...\n  }\n}\n"},980:function(e,n){e.exports="import React, { Component } from 'react'\nimport { kea } from 'kea'\nimport { push } from 'react-router-redux'\n\nimport doSomething from './actions/do-something'\n\n// just to get the dispatch\n@kea({})\nexport deafult const MyComponent extends Component {\n  handleButton = () => {\n    const { dispatch } = this.props\n\n    // call the action\n    dispatch(doSomething())\n\n    // ask redux-router to take us home\n    dispatch(push('/home'))\n  }\n\n  render () {\n    return (\n      <div>\n        <button onClick={this.handleButton}>\n          Do something\n        </button>\n      </div>\n    )\n  }\n}\n"},981:function(e,n){e.exports="import React, { Component } from 'react'\nimport { kea } from 'kea'\nimport { LOCATION_CHANGE } from 'react-router-redux'\n\nimport { SOME_ACTION } from './actions'\n\n@kea({\n  actions: () => ({\n    doit: true\n  }),\n\n  reducer: ({ actions }) => ({\n    myValue: [false, PropTypes.bool, {\n      [SOME_ACTION]: () => false,\n      [actions.doit]: () => true\n    }]\n  }),\n\n  takeEvery: ({ workers }) => ({\n    [LOCATION_CHANGE]: workers.urlToState\n  }),\n\n  workers: {\n    * urlToStateWorker (action) {\n      const { search, pathname } = action.payload\n      // ...\n    }\n  }\n})\nexport deafult const MyComponent extends Component {\n  // ...\n}\n"},982:function(e,n){e.exports="// my-logic.js\nexport default kea({\n  actions: () => ({\n    addOne: true\n  }),\n  reducers: ({ actions }) => ({\n    myNumber: [0, PropTypes.number, {\n      [actions.addOne]: (state) => state + 1\n    }]\n  }),\n  selectors: ({ selectors }) => ({\n    myNumberDouble: [\n      () => [selectors.myNumber],\n      (myNumber) => myNumber * 2,\n      PropTypes.number\n    ]\n  })\n})\n\n// component\nimport TodoList from '../components/TodoList'\nimport { toggleTodo } from '../actions'\n\nimport myLogic from './my-logic'\n\nconst mapStateToProps = state => {\n  return {\n    todos: state => state.todos,\n    myNumber: myLogic.selectors.myNumber,\n    myNumberDouble: myLogic.selectors.myNumberDouble,\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => dispatch(toggleTodo(id)),\n    onAddOneClick: () => dispatch(myLogic.actions.addOne())\n  }\n}\n\nconst VisibleTodoList = connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(TodoList)\n\nexport default ConnectedTodoList\n"}});