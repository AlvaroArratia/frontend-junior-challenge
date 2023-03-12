import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import TodoList from 'components/TodoList';
import TodoResults from 'components/TodoResults';
import './App.css';

const App: FC = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />

      <ToastContainer />
    </div>
  );
};

export default App;
