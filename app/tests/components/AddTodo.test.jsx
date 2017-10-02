var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ =require('jquery');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    // valid data -- calls spy
    it('should dispatch ADD_TODO when valid todo text', () => {
        var todoText = 'Check mail';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        }
        var spy = expect.createSpy(); // lets us pass in function into component so that it's called.
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        // Just like we would access refs in a regular component function.
        addTodo.refs.todoText.value = todoText;
        // Simulate a submit
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action); // Used due to method onAddTodo
    });

    // invalid data -- should not call spy
    it('should not dispatch ADD_TODO when invalid todo next', () => {
        var todoText = '';
        var spy = expect.createSpy(); // lets us pass in function into component so that it's called.
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        // Just like we would access refs in a regular component function.
        addTodo.refs.todoText.value = todoText;
        // Simulate a submit
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled(todoText); // Used due to method onAddTodo
    });
});