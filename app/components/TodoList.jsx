var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function() {

        var {todos, showCompleted, searchText} = this.props;
        //console.log('todos->', todos);
        
        var renderTodos = () => {

            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                )
            }
           
           // Return an array of jsx.
           // For every todo return a piece of jsx that is rendered to screen.
           // When iterating over an array and generating multiple instances of a component u have to give them a unique key prop.
           // This key prop is  used internally by React to keep track of individual components.
           return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => { // the todo is an individual object with properties id, text. Reactjs trick {...todo}
                //console.log('todo->', todo);
                return (
                    <Todo key={todo.id} {...todo}/>
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

// connect() does a connection to TodoList, which means the TodoList component can now request
// data to render itself. Goal here is to connect Redux store to a component.
export default connect(
    (state) => {
        return state; // Tells redux we want access to every single item on the state tree.
    }
)(TodoList);