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
});
