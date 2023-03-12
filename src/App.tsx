import { FC } from 'react';
import TodoList from 'components/TodoList';
import TodoResults from 'components/TodoResults';
import './App.css';

const App: FC = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
    </div>
  );
};

export default App;
