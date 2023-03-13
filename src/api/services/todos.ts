import axiosConfig from 'api/axiosConfig';
import endpoints from 'api/endpoints';
import type { ITodo, TCreateTodo } from '@types';

// Functions for working with the API
const getTodos = async (): Promise<ITodo[]> => {
  const { data } = await axiosConfig.get(endpoints.todos.getAll);
  return data.todos;
};

const createTodo = async (todo: TCreateTodo): Promise<ITodo> => {
  const { data } = await axiosConfig.post(endpoints.todos.create, todo);
  return data;
};

const toggleTodo = async (id: number, checked: boolean): Promise<ITodo> => {
  const { data } = await axiosConfig.patch(endpoints.todos.toggle(id), { checked });
  return data;
};

const deleteTodo = async (id: number): Promise<number> => {
  await axiosConfig.delete(endpoints.todos.delete(id));
  return id;
};

export const todosService = { getTodos, createTodo, toggleTodo, deleteTodo };
