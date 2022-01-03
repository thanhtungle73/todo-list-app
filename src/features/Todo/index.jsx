import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

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

    /* Update state in below function:
        1. Get index
        2. change status
    */
    const handleTodoClick = (todo, index) => {
        //clone current array to the new one
        const newTodoList = [...todoList];

        // toggle state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'active' ? 'completed' : 'active'
        }
        //update todo list
        setTodoList(newTodoList);
    }
/* 
* When there is any item is clicked, this will call the function to update the state
*/
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;