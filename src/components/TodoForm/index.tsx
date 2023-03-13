import { useState, useRef, useEffect } from 'react';

const TodoForm = () => {
  const newTodoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    newTodoRef.current?.focus();
  }, []);

  const [label, setLabel] = useState<string>('');

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={label} onChange={handleLabelChange} placeholder="Enter a new todo" ref={newTodoRef} />

      <button type="submit">ADD TO DO</button>
    </form>
  );
};

export default TodoForm;
