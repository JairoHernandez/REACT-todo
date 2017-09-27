var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions'); // alias in webpack.config.js
var store = require('configureStore').configure();

// listens to changes on my store
store.subscribe(() => {
  console.log('New state', store.getState());
});

// Chrome console output.
store.dispatch(actions.addTodo('Clean the yard')); // Placed into todos: [{}] array of objects.
store.dispatch(actions.setSearchText('yard')); // Placed into key 'searchText'.
store.dispatch(actions.toggleShowCompleted()); // ""

// Load Foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);