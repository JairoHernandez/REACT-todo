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

    describe('todosReducer', () => {
        it('should add new todo', () => {
            
            var action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        // define todos array with realistic todo item
        // generate action, call reducer and assert commpleted equal
        it('should toggle todo', () => {
            
            // dummy data
            var todos = [{
                id: '123',
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];

            var action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };

            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });

        it('should add existing todos', () => {
            
            var todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];

            var action = {
                type: 'ADD_TODOS',
                todos
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

    });
});