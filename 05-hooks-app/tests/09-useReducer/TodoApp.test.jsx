import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/09-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en TodoApp", () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Todo #1",
        done: false,
      },
      {
        id: 2,
        description: "Todo #2",
        done: true,
      },
    ],
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    todosCount: 2,
    pendingTodosCount: 1,
  });

  test("Debe mostrar el componente correctamente", () => {
    render(<TodoApp />);

    const { todos } = useTodos();

    expect(screen.getByText(todos[0].description)).toBeTruthy();
    expect(screen.getByText(todos[1].description)).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();

    screen.debug();
  });
});
