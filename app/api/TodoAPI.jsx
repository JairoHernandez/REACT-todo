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
    },

    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;
        //console.log('filteredTodos -->', filteredTodos); // array of todo objects

        filteredTodos = filteredTodos.filter((todo) => { // Runs on each element.
            // !todo.completed equates to NOT completed
            //console.log(todo.completed + "---" + showCompleted);
            // When page loads showCompleted = false and if completed state is "true" it negates to false(!). "Completed" items will not list at page load.
            return !todo.completed || showCompleted; 
        });

        // Filter by searchText
        // [string].indexOf('[text]') searches if text is inside a string.
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            // return every item or if it finds item in text field
            return searchText.length === 0 || text.indexOf(searchText) > -1; // just need full condition to be true
        });

        // Sort todos with non-completed first.
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1; // -1 means a comes before b
            } else if (a.completed && !b.completed) {
                return 1; // 1 means b comes before a
            } else {
                return 0; // 0 assumes a and b are equal so no reason to sort
            }
        });

        return filteredTodos;
    }
};