var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();

        var itemEntered = this.refs.item.value;

        this.props.onAddTodo(itemEntered);
    },

    render: function() {
        return (
            <div>
                 <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="item" placeholder="Enter todo item"/>
                    <button className="button expanded">Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;