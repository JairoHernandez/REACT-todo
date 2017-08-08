var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {

        var {todos} = this.props;
        //console.log('todos->', todos);
        
        var renderTodos = () => {
           
           // Return an array of jsx.
           // For every todo return a piece of jsx that is rendered to screen.
           // When iterating over an array and generating multiple instances of a component u have to give them a unique key prop.
           // This key prop is  used internally by React to keep track of individual components.
           return todos.map((todo) => { // the todo is an individual object with properties id, text. Reactjs trick {...todo}
                //console.log('todo->', todo);
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;