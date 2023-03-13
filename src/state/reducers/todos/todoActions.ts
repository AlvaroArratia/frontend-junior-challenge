import { createAsyncThunk } from '@reduxjs/toolkit';
import actionType from './actionTypes';

import { todosService } from 'api/services/todos';
import type { ITodo, TCreateTodo, TDeleteTodo, TToggleTodo } from '@types';

const getTodos = createAsyncThunk<ITodo[]>(actionType.GET_TODO, async () => {
  const todos = await todosService.getTodos();
  return todos;
});

const addTodo = createAsyncThunk<ITodo, TCreateTodo>(actionType.ADD_TODO, async ({ label, checked }) => {
  const newTodo = await todosService.createTodo({
    label,
    checked,
  });
  return newTodo;
});

const toggleTodo = createAsyncThunk<ITodo, TToggleTodo>(actionType.TOGGLE_TODO, async ({ id, checked }) => {
  const todo = await todosService.toggleTodo(id, checked);
  return todo;
});

const deleteTodo = createAsyncThunk<number, TDeleteTodo>(actionType.DELETE_TODO, async ({ id }) => {
  await todosService.deleteTodo(id);
  return id;
});

const actions = { getTodos, addTodo, toggleTodo, deleteTodo };

export default actions;
