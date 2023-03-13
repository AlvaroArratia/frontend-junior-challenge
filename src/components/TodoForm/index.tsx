import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import actions from 'state/reducers/todos/todoActions';

import './styles.css';

const TodoForm = () => {
  const newTodoRef = useRef<HTMLInputElement>(null);
  const { loading } = useAppSelector(state => state.todos);

  useEffect(() => {
    newTodoRef.current?.focus();
  }, []);

  const dispatch = useAppDispatch();
  const [label, setLabel] = useState<string>('');

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!label) return toast.error('Please enter a To-Do');

    try {
      await dispatch(actions.addTodo({ label, checked: false }));
      toast.success('To-Do added successfully', { icon: '📝' });
      setLabel('');
    } catch (error) {
      toast.error('Something went wrong', { bodyStyle: { color: '#EF5350' } });
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form-content">
        <input
          className="todo-form-field"
          style={loading === 'loading' ? { cursor: 'not-allowed' } : { cursor: 'text' }}
          type="text"
          value={label}
          onChange={handleLabelChange}
          placeholder="Enter a new todo"
          ref={newTodoRef}
          disabled={loading === 'loading'}
        />

        <button className="todo-form-button" type="submit">
          ADD TO DO
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
