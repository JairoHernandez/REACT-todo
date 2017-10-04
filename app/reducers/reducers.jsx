var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state='', action) => {
    
    // intentionally throw error since this goes against a pure function.
    // TypeError: Cannot assign to read only property 'searchText' of object '#<Object>'
    // action.searchText = 2;

    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = (state=false, action) => {
    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

export var todosReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state, 
                { 
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        // add case for TOGGLE_TODO, completed equla to opposite value & updateCompletedAt
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    
                    var nextCompleted = !todo.completed;

                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? moment().unix() : undefined
                    };
                } else {
                    return todo;
                }
            });
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        default:
            return state;
    }
};