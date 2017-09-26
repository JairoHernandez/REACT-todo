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
