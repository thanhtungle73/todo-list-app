import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TodoItem from '../TodoItem';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
};
/* 
* Install classnames package by run command: npm i --save classname
* Then use classnames to pass the object includes key and value (logic)
*/
function TodoList({ todoList, actions }) {

    // Check to see if there is onTodoClick or not?
    const handleTodoClick = (todo, index) => {
        // If there is no onTodoClick then nothing happen
        if (!actions) return;

        //Call onTodoClick to update the
        actions.toggleTodo(todo, index);
    };

    const handleRemoveTodo = (index) => {
        if (!actions) return;

        actions.removeTodo(index);
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"
                onChange={(event) => actions.toggleAllTodo(event)}
                defaultChecked={todoList.every(
                    (todo) => todo.status === 'completed'
                )}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                <TodoItem todoList={todoList} onTodoItemClick={handleTodoClick} onRemoveTodoItemClick={handleRemoveTodo} />
            </ul>
        </section>
    );
}

export default TodoList;