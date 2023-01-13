import { useTodos } from "../hooks";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1 className="text-center">TodoApp</h1>
      <h2 className="h1 text-center mt-5">
        Total: {todosCount} | Pendientes: {pendingTodosCount}
      </h2>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
