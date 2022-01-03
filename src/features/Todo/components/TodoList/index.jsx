import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

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
function TodoList({ todoList, onTodoClick }) {

    // Check to see if there is onTodoClick or not?
    const handleTodoClick = (todo, index) => {
        // If there is no onTodoClick then nothing happen
        if (!onTodoClick) return;

        //Call onTodoClick to update the
        onTodoClick(todo, index);
    };

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {todoList.map((todo, index) => (
                        <li key={todo.id}
                            className={classnames({
                                'todo-item': true,
                                completed: todo.status === 'completed'
                            })}
                            onClick={() => handleTodoClick(todo, index)}
                        >{todo.title}</li>
                    ))}
                </ul>
        </section>
    );
}

export default TodoList;