import React from "react";
import { useSelector } from "react-redux/es/exports";
import { getChekedTodos } from "utils/serialization";
import "./styles.scss";

const TodoResults = ({ itemsList: listTodos, isSuccess = false }) => {



  return <>
    {
      isSuccess &&
      <div className="todo-results">
        <span>
          Done:  {getChekedTodos(listTodos)?.length} /
        </span>
        <span className="todo-results__total"> {listTodos?.length}</span>
      </div>
    }
  </>
};

export default TodoResults;
