import axiosConfig from 'api/axiosConfig';
import { endpoints } from 'api/endpoints';
import type { ITodo } from 'state/types/todosTypes';
import type { TCreateTodo, TUpdateTodo } from '@types';

const getOne = async (id: number): Promise<ITodo> => {
  const { data } = await axiosConfig.get(endpoints.todos.getOne(id));
  return data;
};

const updateTodo = async (id: number, todo: TUpdateTodo): Promise<ITodo> => {
  const { data } = await axiosConfig.patch(endpoints.todos.getOne(id), todo);
  return data;
};

// Functions for working with the API

const getTodos = async (): Promise<ITodo[]> => {
  const { data } = await axiosConfig.get(endpoints.todos.getAll);
  return data;
};

const createTodo = async (todo: TCreateTodo): Promise<ITodo> => {
  const { data } = await axiosConfig.post(endpoints.todos.create, todo);
  return data;
};

const toggleTodo = async (id: number): Promise<ITodo> => {
  const todo = await getOne(id);
  const updatedTodo = { ...todo, checked: !todo.checked };
  return updateTodo(id, updatedTodo);
};

const deleteTodo = async (id: number): Promise<void> => {
  await axiosConfig.delete(endpoints.todos.delete(id));
};

export { getTodos, createTodo, toggleTodo, deleteTodo };
