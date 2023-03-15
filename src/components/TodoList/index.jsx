import toast, { Toaster } from 'react-hot-toast';
import TodoListItem from "components/TodoListItem";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "store/todosApi/todosApi";
import "./styles.css";
import SpinLoader from 'components/spinComponent/spin';
import HelperMessage from '../helperMessage/HelperMessage'
import RefreshButton from 'components/refreshButton/refreshButton';

const TodoList = ({ loading, isError, itemsList, handleRefresh }) => {
  const [deleteTodoX] = useDeleteTodoMutation()
  const [updateTodoX] = useUpdateTodoMutation()

  const handleDelete = (todoId) => {
    deleteTodoX(todoId)
  }

  const handleToggleTodo = (todoX) => {
    updateTodoX({ ...todoX, checked: !todoX.checked })
  }


  return (
    <div className="todo-list">
      <div><Toaster
        position="bottom-center"
        reverseOrder={false} />
      </div>

      <SpinLoader loading={loading} />

      {(isError && !loading) && <> <span>
        <HelperMessage
          text={'Error en la carga. Da click en refrescar para intentar de nuevo :( .'}
          typeColor={'error'}
          actionModal={
            <RefreshButton
              onClick={() => handleRefresh()}
            />}

        />
        <br />
      </span>

      </>
      }

      {itemsList?.length > 0 && <>
        <div className="todo-list-content">
          {/* Fix an ability to render todos */}
          {
            itemsList.map((todoX) => <div key={todoX.id + todoX.label}>
              <TodoListItem
                onCheck={() => handleToggleTodo(todoX)}
                checked={todoX.checked}
                onDelete={() => handleDelete(todoX.id)}
                label={todoX.label}
                todoId={todoX.id}
              />
            </div>
            )
          }
        </div>
      </>}

      {(itemsList?.length === 0 && !isError) && <>
        <div className="no-todos">
          <HelperMessage
            text={'Looks like you are absolutely free today!. Let start '}
            typeColor={'info'}
          />

        </div>
      </>}


    </div>
  );
};

export default TodoList;
