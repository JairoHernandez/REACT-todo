var expect = require('expect');
var reducers = require('reducers'); // Found with alias in webpack.config.
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            
            var action = {
                // explicity state versus adding as dependency from actions.jsx because it 
                // complicates where failure occurs either in the reducer or action.
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });

        
    });

    // Test that the showCompleted status gets flipped
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'        
            };

            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });
});