import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/09-useReducer/components/TodoItem";

describe("Pruebas en TodoItem", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between "
    );

    const spanElement = screen.getByTestId("span");

    expect(spanElement.className).toBe("align-self-center ");

    screen.debug();
  });

  test("Debe mostrar el todo completado", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByTestId("span");

    expect(spanElement.className).toContain(" text-decoration-line-through");

    screen.debug();
  });

  test("span debe llamar el toggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByTestId("span");

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("button debe llamar el deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = screen.getByTestId("btnBorrar");

    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
