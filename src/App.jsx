import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import "./App.scss";
import { usePostTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation, useLazyGetTodosQuery } from "store/todosApi/todosApi";
import { useDispatch } from "react-redux";
import { setListTodo } from "store/sliceTodos/sliceTodos";
import AddTodoForm from "components/addTodoForm";
import FloatMenu from "components/deleteChecked";
import SpinLoader from "components/spinComponent/spin";
import HeaderTodo from "components/TodoHeader";

const App = () => {

  const [loadTodosAPI, { isLoading, data: todoListAPI, isError, isSuccess, isFetching }] = useLazyGetTodosQuery()
  const dispatch = useDispatch()

  const hanldeLoadTodosAPI = () => {
    loadTodosAPI();
    if (todoListAPI) {
      dispatch(setListTodo({
        totalTodos: todoListAPI.length,
        listTodos: todoListAPI
      }));
    }
  }


  useEffect(() => {
    hanldeLoadTodosAPI();
  }, [todoListAPI])



  return (
    <div className="root">



      <SpinLoader loading={isLoading || isFetching} />
      <HeaderTodo />
      <AddTodoForm />
      <FloatMenu />
      < TodoList
        loading={isLoading}
        isError={isError}
        itemsList={todoListAPI}
        handleRefresh={hanldeLoadTodosAPI}
      />

      <TodoResults
        itemsList={todoListAPI}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default App;
