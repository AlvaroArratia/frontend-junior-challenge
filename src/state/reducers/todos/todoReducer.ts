import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import actions from './todoActions';
import NAME_REDUCER from 'state/constants';

import { TFulfilledAction, TPendingAction, TRejectedAction } from 'state/types/storeTypes';
import type { ITodo, ITodoState } from '@types';

const initialState: ITodoState = {
  todos: [],
  loading: 'idle',
  error: null,
};

const todoSlice = createSlice({
  name: NAME_REDUCER.todos,
  initialState,
  reducers: {},
  extraReducers(builder) {
    //
    builder.addCase(actions.getTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    });

    builder.addCase(actions.addTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
      const { label } = action.payload;
      const todoIds = state.todos.map(todo => todo.id);
      const id = Math.max(...todoIds) + 1;
      const newTodo = { id, label, checked: false };
      state.todos = [...state.todos, newTodo];
    });

    builder.addCase(actions.toggleTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
      const { id } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.checked = !todo.checked;
      }
    });

    builder.addCase(actions.deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
      const { payload: id } = action;
      state.todos = state.todos.filter(todo => todo.id !== id);
    });

    // Match any action that ends in '/pending'
    builder.addMatcher<TPendingAction>(
      (action): action is TPendingAction => action.type.endsWith('/pending'),
      state => {
        state.loading = 'loading';
        state.error = null;
      },
    );

    // Match any action that ends in '/fulfilled'
    builder.addMatcher<TFulfilledAction>(
      (action): action is TFulfilledAction => action.type.endsWith('/fulfilled'),
      state => {
        state.loading = 'idle';
        state.error = null;
      },
    );

    // Match any action that ends in '/rejected'
    builder.addMatcher<TRejectedAction>(
      (action): action is TRejectedAction => action.type.endsWith('/rejected'),
      state => {
        state.loading = 'failed';
        state.error = state.error || 'Something went wrong. The API is read-only.';
      },
    );

    builder.addDefaultCase(state => state);
  },
});

export default todoSlice.reducer;
