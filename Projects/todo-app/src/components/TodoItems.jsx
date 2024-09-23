import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
// className={styles.itemContainer}
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((items) => (
        <TodoItem todoName={items.name} todoDate={items.date} />
      ))}
    </div>
  );
};

export default TodoItems;
