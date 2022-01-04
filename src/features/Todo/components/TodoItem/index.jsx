import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoItem.propTypes = {
    todoList: PropTypes.array,
    handleTodoClick: PropTypes.func
};

TodoItem.defaultProps = {
    todoList: [],
    handleTodoClick: null
};

function TodoItem({ todoList, onTodoItemClick, onRemoveTodoItemClick }) {
    return (
        <>
            {todoList.map((todo, index) => (
                <li key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                >
                    <div className="view">
                        <input className="toggle" type="checkbox"
                            defaultChecked={todo.status === 'completed'}
                            onChange={() => onTodoItemClick(todo, index)} />
                        <label>{todo.title}</label>
                        <button className="destroy" onClick={() => onRemoveTodoItemClick(index)}></button>
                    </div>
                    <input className="edit" defaultValue="Create a TodoMVC template" />
                </li>
            ))}
        </>
    );
}

export default TodoItem;