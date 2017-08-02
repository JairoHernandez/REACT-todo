var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ =require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy(); // lets us pass in function into component so that it's called.
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        // We previously used $el.find to target the form and simulate a submit action, but that too is
        // optionalsince we have refs defined on our input fields. The refs point directly do the DOM 
        // nodes we want to simulate events on. That means .find() is not necessary. You can use jquery as 
        // before, but this is how you can do it with refs.
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        // false is for checkbox since we are not passing it in this test to update it.
        expect(spy).toHaveBeenCalledWith(false, 'Dog'); 
    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        // Same goes for explanation above.
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        // Pass in empty string for searchText since we are not testing that.
        expect(spy).toHaveBeenCalledWith(true, '');
    });
});