var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    it('should exist', () => {
        expect(TodoAPI).toExists();
    });

    describe('setTodos', () => {
        it('it should set valid todos array', () => {
            var todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos')); // 5:52
        });
    });

    describe('getTodos', () => {

    });
});