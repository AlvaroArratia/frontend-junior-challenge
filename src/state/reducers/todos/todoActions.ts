import { createAsyncThunk } from '@reduxjs/toolkit';
import actionType from './actionTypes';
import type { ITodo } from 'state/types/todosTypes';

// TODO: Add types to the async functions

const getTodos = createAsyncThunk(actionType.getTodos, async () => {});

const addTodo = createAsyncThunk(actionType.addTodo, async (todo: ITodo) => {});

const toggleTodo = createAsyncThunk(actionType.toggleTodo, async (id: number) => {});

const deleteTodo = createAsyncThunk(actionType.deleteTodo, async (id: number) => {});

export const actions = { getTodos, addTodo, toggleTodo, deleteTodo };
