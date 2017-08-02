var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ =require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    // valid data -- calls spy
    it('should call onAddTodo prop with valid data', () => {
        var todoText = 'Check mail';
        var spy = expect.createSpy(); // used because of method, which is onAddTodo.
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        // Just like we would access refs in a regular component function.
        addTodo.refs.todoText.value = todoText;
        // Simulate a submit
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText); // Used due to method onAddTodo
    });

    // invalid data -- should not call spy
    it('should not call onAddTodo prop when invalid input', () => {
        var todoText = '';
        var spy = expect.createSpy(); // used because of method, which is onAddTodo.
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        // Just like we would access refs in a regular component function.
        addTodo.refs.todoText.value = todoText;
        // Simulate a submit
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled(todoText); // Used due to method onAddTodo
    });
});