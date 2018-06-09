import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
    <ul className="todo-list">
        {todos.map((todo)=> (
            <Todo key={todo.id} content={todo.content} onClick={()=> onTodoClick(todo.id)} completed={todo.completed}/>

        ))}
    </ul>
);

export default TodoList;