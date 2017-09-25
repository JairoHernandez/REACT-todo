var expect = require('expect');
var reducers = require('reducers'); // Found with alias in webpack.config.

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            
            var action = {
                // explicity state versus adding as dependency from actions.jsx because it 
                // complicates where failure occurs either in the reducer or action.
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer('', action);
            expect(res).toEqual(action.searchText);
        });

        // Test that the showCompleted status gets flipped
    });
});