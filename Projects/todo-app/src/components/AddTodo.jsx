import React, { useContext, useRef } from "react";
import { BiCommentAdd } from "react-icons/bi";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.input}
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input
            className={styles.input}
            ref={dueDateElement}
            type="date"
          ></input>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <BiCommentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
