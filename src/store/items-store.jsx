import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext([
  {
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.todoName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItems;
};

export const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (todoName, dueDate) => {
    const newItemReducer = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        dueDate,
      },
    };
    dispatchTodoItems(newItemReducer);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemReducer = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteItemReducer);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
