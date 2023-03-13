import { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoList from 'components/TodoList';
import TodoResults from 'components/TodoResults';
import TodoForm from 'components/TodoForm';

import { useAppDispatch } from 'hooks/useStore';
import actions from 'state/reducers/todos/todoActions';

import './App.css';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getTodos());
  }, [dispatch]);

  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />

      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </div>
  );
};

export default App;
