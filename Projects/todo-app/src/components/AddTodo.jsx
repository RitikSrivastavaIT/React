import React, { useState } from "react";
import styles from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={styles.input}
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            className={styles.input}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
