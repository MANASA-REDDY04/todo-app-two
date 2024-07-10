import { useContext, useRef, useState } from "react";
import { MdAddComment } from "react-icons/md";
import { TodoItemsContext } from "../store/items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
