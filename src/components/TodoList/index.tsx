import './styles.css';

const TodoList = () => {
  const handleDelete = (todoId: number) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId: number, isChecked: boolean) => {
    // Fix an ability to toggle task
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">{/* Fix an ability to render todos */}</div>
      <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
    </div>
  );
};

export default TodoList;
