import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classnames from 'classnames';

Footer.propTypes = {
    filteredStatus: PropTypes.string,
    onClickShowAll: PropTypes.func,
    onClickShowCompleted: PropTypes.func,
    onClickShowActive: PropTypes.func,
    todoList: PropTypes.array,
};

Footer.defaultProps = {
    onClickShowAll: null,
    onClickShowCompleted: null,
    onClickShowActive: null,
};

function Footer({ todoList, filteredStatus, filters, actions}) {
    const countActiveTodo = todoList.filter((todo) => {
        return todo.status === 'active';
    }).length;

    const isCompletedTodo = todoList.filter((todo) => {
        return todo.status === 'completed';
    }).length > 0;

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{countActiveTodo}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a
                        className={classnames({ selected: filteredStatus === 'all' })} href="#/"
                        onClick={filters.handleShowAllClick}>All</a>
                </li>
                <li>
                    <a
                        className={classnames({ selected: filteredStatus === 'active' })} href="#/"
                        onClick={filters.handleShowActiveClick}>Active</a>
                </li>
                <li>
                    <a
                        className={classnames({ selected: filteredStatus === 'completed' })} href="#/"
                        onClick={filters.handleShowCompletedClick}>Completed</a>
                </li>
            </ul>
            <button
                className={classnames({
                    "clear-completed": true,
                    "hidden": !isCompletedTodo
                })} 
                onClick={actions.clearCompleted}
                >Clear completed</button>
        </footer>
    );
}

export default Footer;