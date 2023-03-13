import { toast } from 'react-toastify';

import Spinner from 'components/Spinner';
import TodoListItem from 'components/TodoListItem';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import actions from 'state/reducers/todos/todoActions';

import './styles.css';

const TodoList = () => {
  const { todos, loading, error } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const handleDelete = async (todoId: number): Promise<void> => {
    try {
      const response = await dispatch(actions.deleteTodo({ id: todoId }));

      if (actions.deleteTodo.rejected.match(response)) throw new Error();

      toast.success('Task was deleted successfully', { icon: '🗑️' });
    } catch (error) {
      toast.error('API is read-only.', { bodyStyle: { color: '#EF5350' } });
    }
  };

  const toggleCheck = async (todoId: number, isChecked: boolean): Promise<void> => {
    try {
      const response = await dispatch(actions.toggleTodo({ id: todoId, checked: !isChecked }));

      if (actions.toggleTodo.rejected.match(response)) throw new Error();

      toast.success('Task was updated successfully', { icon: '✅' });
    } catch (error) {
      toast.error('API is read-only.', { bodyStyle: { color: '#EF5350' } });
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {todos?.map(todo => (
          <TodoListItem
            key={todo.id}
            onCheck={() => toggleCheck(todo.id, todo.checked)}
            onDelete={() => handleDelete(todo.id)}
            {...todo}
          />
        ))}
        {loading === 'loading' && <Spinner />}
        {error && <small className="todo-list-error">{error}</small>}
      </div>

      {!error && todos.length <= 0 && <div className="no-todos">Looks like you&apos;re absolutely free today!</div>}
    </div>
  );
};

export default TodoList;
