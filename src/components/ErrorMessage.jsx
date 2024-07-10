import { useContext } from "react";
import { TodoItemsContext } from "../store/items-store";

const ErrorMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return todoItems.length == 0 && <h2>No Tasks</h2>;
};

export default ErrorMessage;
