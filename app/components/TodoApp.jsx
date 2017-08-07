var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
 
 var TodoApp = React.createClass({
     getInitialState: function() {
        return {
            showCompleted: false, // as app starts show todos not yet finished
            searchText: '', // show all completed items
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Leave mail on porch',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Play video games',
                    completed: false
                }
                
            ]
        }
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

     handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
     },

     render: function() {

         var {todos} = this.state;

         return (
             <div>
                 <TodoSearch onSearch={this.handleSearch}/>
                 <TodoList todos={todos}/>
                 <AddTodo onAddTodo={this.handleAddTodo}/>
             </div>
         )
     }
 });

 module.exports = TodoApp;