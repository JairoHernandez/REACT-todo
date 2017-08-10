var $ = require('jquery');


module.exports = {
    setTodos: function(todos) {
        // console.log('todos -->', todos);
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos)); // localStorage only takes a string in.
            return todos;
        }
    },

    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos); // Change back to object.
        } catch(e) {
            // Runs without crashing program
        }

        // if ($.isArray(todos)) {
        //     return todos;
        // } else {
        //     return [];
        // }

        // equivalent
        return $.isArray(todos) ? todos : [];
    }

};