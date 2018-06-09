import React, { Component } from 'react';
import AddTodo from '../Containers/AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import VisibleTodoList from '../Containers/VisibleTodoList';
import todos from '../store.js';

import 'todomvc-app-css/index.css';

const TodoApp = ()=>(
    <section className="todoapp">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </section>
);

export default TodoApp;