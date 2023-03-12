import NAME_REDUCER from 'state/constants';

const actionType = {
  getTodos: `${NAME_REDUCER.todos}/getTodos`,
  addTodo: `${NAME_REDUCER.todos}/addTodo`,
  toggleTodo: `${NAME_REDUCER.todos}/toggleTodo`,
  deleteTodo: `${NAME_REDUCER.todos}/deleteTodo`,
};

export default actionType;
