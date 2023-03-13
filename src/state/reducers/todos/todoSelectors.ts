import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'state/types/storeTypes';

const selectTodosCompleted = createSelector(
  (state: RootState) => state.todos,
  todos => todos.todos.filter(todo => todo.checked).length,
) as (state: RootState) => number;

export { selectTodosCompleted };
