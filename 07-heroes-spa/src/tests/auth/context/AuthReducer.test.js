import { AuthReducer } from "../../../auth/context";
import { types } from "../../../auth/types/types";

describe("Pruebas en AuthReducer", () => {
  test("Debe devolver el estado por defecto", () => {
    const state = AuthReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test("Debe llamar el login, autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Roberto",
        id: "321",
      },
    };

    const state = AuthReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Debe borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: { id: "564", name: "Roberto" },
    };

    const action = {
      type: types.logout,
    };

    const nuevoEstado = AuthReducer(state, action);

    expect(nuevoEstado).toEqual({ logged: false, name: null });
  });
});
