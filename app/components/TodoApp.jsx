var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');
 
 var TodoApp = React.createClass({
     getInitialState: function() {
        return {
            showCompleted: false, // as app starts do not show completed
            searchText: '',
            todos: TodoAPI.getTodos()
        }
     },

     // Lifecycle method fired after either the props or the states for the component changes.
     componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);
     },

     handleAddTodo: function(text) {
        //alert('new todos: ' + text);
        this.setState({
            todos: [
                ...this.state.todos, 
                { 
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
     },

     handleToggle: function(id) { // todo checkbox
        // alert(id);
        var updatedTodos = this.state.todos.map((todo) => {

            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
     },

     handleSearch: function(showCompleted, searchText) { // show completed checkbox
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
     },

     render: function() {

         var {todos, showCompleted, searchText} = this.state;
         var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

         return (
             <div>
                 <TodoSearch onSearch={this.handleSearch}/>
                 <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                 <AddTodo onAddTodo={this.handleAddTodo}/>
             </div>
         )
     }
 });

 module.exports = TodoApp;