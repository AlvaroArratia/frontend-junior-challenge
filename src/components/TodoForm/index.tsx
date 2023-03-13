import { useState, useRef, useEffect } from 'react';
import { useAppDispatch } from 'hooks/useStore';
import { actions } from 'state/reducers/todos/todoActions';
import { toast } from 'react-toastify';

const TodoForm = () => {
  const newTodoRef = useRef<HTMLInputElement>(null);

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

    if (!label) return;

    try {
      await dispatch(actions.addTodo({ label, checked: false }));
      toast.success('Task added successfully', { icon: '📝' });
    } catch (error) {
      toast.error('Something went wrong');
    }

    setLabel('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={label} onChange={handleLabelChange} placeholder="Enter a new todo" ref={newTodoRef} />

      <button type="submit">ADD TO DO</button>
    </form>
  );
};

export default TodoForm;
