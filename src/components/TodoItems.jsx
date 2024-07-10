import { useContext } from "react";
import { TodoItemsContext } from "../store/items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
