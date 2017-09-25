export var searchTextReducer = (state='', action) => {
    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED

