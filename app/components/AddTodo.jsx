var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export var AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            //this.props.onAddTodo(todoText);
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus(); // Puts cursor back in form input box to have user try again.
        }
    },

    render: function() {
        return (
            <div className="container__footer">
                 <form ref="form" onSubmit={this.handleSubmit} className="countdown-form">
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

// Does not need properties off of the state.
export default connect()(AddTodo);