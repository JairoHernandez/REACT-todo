var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var $ =require('jquery');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo'

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: 'Check mail',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];

        var store = configure({
            todos
        });

        // No need to pass down properties since it'll get all data it needs
        // from store, which we passed into Provider.
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );

        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

        // Returns array.
        // Checks how many of a given component are rendered under a separate component.
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
        // console.log(todosComponents.length);

        expect(todosComponents.length).toBe(todos.length); // Verify proper # of items rendered.
    });

    it('should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});