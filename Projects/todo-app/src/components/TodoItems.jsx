import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((items) => (
        <TodoItem
          key={items.name}
          todoName={items.name}
          todoDate={items.date}
        />
      ))}
    </div>
  );
};

export default TodoItems;
