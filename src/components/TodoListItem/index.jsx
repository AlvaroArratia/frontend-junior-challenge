import React from "react";
import "./styles.scss";

import { RiDeleteBin6Line } from "react-icons/ri"

const TodoListItem = ({ onCheck, checked, onDelete, label, todoId }) => (
  <div className={`todo-list-item ${checked ? "active" : ""}`}>
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="todo-list-item__content"
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onCheck}
        id={'item-selection__checkbox' + todoId}
      />
      <label htmlFor={'item-selection__checkbox' + todoId}
        className={checked ? "todo-list-item__checkebox" : ""} >{label}</label>
    </div>
    <RiDeleteBin6Line className="todo-list-item__btn-delete" onClick={onDelete} />

  </div>
);

export default TodoListItem;
