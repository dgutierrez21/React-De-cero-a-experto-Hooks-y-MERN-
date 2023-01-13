import { useEffect, useReducer } from "react";
import { todoReducer } from "../09-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "Toggle Todo",
      payload: id,
    });
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    dispatch({
      type: "Remove Todo",
      payload: id,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
