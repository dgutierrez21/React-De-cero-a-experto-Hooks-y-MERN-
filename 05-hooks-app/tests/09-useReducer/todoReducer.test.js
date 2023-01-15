import { todoReducer } from "../../src/09-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const estadoInicial = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];
  test("Debe devolver el estado inicial", () => {
    const nuevoEstado = todoReducer(estadoInicial, {});

    expect(nuevoEstado).toBe(estadoInicial);
  });

  test("Debe agregar un todo", () => {
    const action = {
      type: "Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };

    const nuevoEstado = todoReducer(estadoInicial, action);

    expect(nuevoEstado.length).toBe(2);
    expect(nuevoEstado).toContain(action.payload);
  });

  test("Debe eliminar un todo", () => {
    const action = {
      type: "Remove Todo",
      payload: 1,
    };

    const nuevoEstado = todoReducer(estadoInicial, action);
    expect(nuevoEstado.length).toBe(0);
  });

  test("Debe de realizar el toggle del todo", () => {
    const action = {
      type: "Toggle Todo",
      payload: 1,
    };

    const nuevoEstado = todoReducer(estadoInicial, action);

    expect(nuevoEstado[0].done).toBe(true);
  });
});
