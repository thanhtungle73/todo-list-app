import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Learn HTML, CSS',
            status: 'active'
        },
        {
            id: 2,
            title: 'Learn Javascript',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Learn ReactJS',
            status: 'active'
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setfilteredStatus] = useState('all');

    const actions = {
        /* Update state in below function:
           1. Get index
           2. change status
       */
        toggleTodo: (todo, index) => {
            //clone current array to the new one
            const newTodoList = [...todoList];

            // toggle state
            newTodoList[index] = {
                ...newTodoList[index],
                status: newTodoList[index].status === 'active' ? 'completed' : 'active'
            }
            //update todo list
            setTodoList(newTodoList);
        },
        toggleAllTodo: (event) => {
            //clone current array to the new one
            const newTodoList = [...todoList];
            // toggle state
            newTodoList.forEach((newTodo) => {
                newTodo.status = event.target.checked ? 'completed' : 'active';
                }
            );
            console.log(newTodoList)
            //update todo list
            setTodoList(newTodoList);
        },
        removeTodo: (index) => {
            //clone current array to the new one
            const newTodoList = [...todoList];

            // remove todo at index
            //remember: the splice will return the cut value, not remaining values
            newTodoList.splice(index, 1)
            //update todo list
            setTodoList(newTodoList);
        },
        clearCompleted: () => {
            //clone current array to the new one
            const newTodoList = [...todoList];

            const clearedTodoList = newTodoList.filter(todo => todo.status === 'active');

            //update todo list
            setTodoList(clearedTodoList);
        }
    }

    const filters = {
        handleShowAllClick: () => {
            setfilteredStatus('all');
        },
        handleShowActiveClick: () => {
            setfilteredStatus('active');
        },
        handleShowCompletedClick: () => {
            setfilteredStatus('completed');
        }
    }

    // Will filter all or filter according to status
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || todo.status === filteredStatus);

    /* 
    * When there is any item is clicked, this will call the function to update the state
    */
    return (
        <section className="todoapp">
            <Header/>

            <TodoList todoList={renderedTodoList} actions={actions}/>

            <Footer todoList={todoList} filteredStatus={filteredStatus} filters={filters} actions={actions} />
        </section>
    );
}

export default TodoFeature;