import React from "react";
import styles from "./AddTodo.module.css";
function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input className={styles.input} type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
