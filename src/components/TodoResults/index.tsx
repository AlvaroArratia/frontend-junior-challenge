import { useAppSelector } from 'hooks/useStore';
import { selectTodosCompleted } from 'state/reducers/todos/todoSelectors';
import './styles.css';

const TodoResults = () => {
  // Fix an ability to calculate completed tasks
  const todosCompleted = useAppSelector(selectTodosCompleted);

  return <div className="todo-results">Done: {todosCompleted}</div>;
};

export default TodoResults;
