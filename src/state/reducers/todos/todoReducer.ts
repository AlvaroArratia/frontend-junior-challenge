import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { actions } from './todoActions';
import NAME_REDUCER from 'state/constants';

import type { ITodo, ITodoState } from 'state/types/todosTypes';

// TODO: Remove this mock data
import { dataMock } from 'mock';

const initialState: ITodoState = {
  todos: dataMock,
  loading: 'idle',
  error: null,
};

const todoSlice = createSlice({
  name: NAME_REDUCER.todos,
  initialState,
  reducers: {},
  extraReducers: {
    // Fetching todos
    [actions.getTodos.pending.type]: state => {
      state.loading = 'loading';
    },
    [actions.getTodos.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
      state.loading = 'idle';
    },
    [actions.getTodos.rejected.type]: state => {
      state.loading = 'failed';
      state.error = state.error || 'Failed to fetch todos';
    },

    // Adding a todo
    [actions.addTodo.pending.type]: state => {
      state.loading = 'loading';
    },
    [actions.addTodo.fulfilled.type]: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
      state.loading = 'idle';
    },
    [actions.addTodo.rejected.type]: state => {
      state.loading = 'failed';
      state.error = state.error || 'Failed to add a todo';
    },

    // Toggle a todo
    [actions.toggleTodo.pending.type]: state => {
      state.loading = 'loading';
    },
    [actions.toggleTodo.fulfilled.type]: (state, action: PayloadAction<ITodo>) => {
      const { id, checked } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) todo.checked = checked;
      state.loading = 'idle';
    },
    [actions.toggleTodo.rejected.type]: state => {
      state.loading = 'failed';
      state.error = state.error || 'Failed to toggle a todo';
    },

    // Deleting a todo
    [actions.deleteTodo.pending.type]: state => {
      state.loading = 'loading';
    },
    [actions.deleteTodo.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.loading = 'idle';
    },
    [actions.deleteTodo.rejected.type]: state => {
      state.loading = 'failed';
      state.error = state.error || 'Failed to delete a todo';
    },
  },
});

export default todoSlice.reducer;
