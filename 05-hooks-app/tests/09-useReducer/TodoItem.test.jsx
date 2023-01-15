import { render, screen } from "@testing-library/react";
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
});
