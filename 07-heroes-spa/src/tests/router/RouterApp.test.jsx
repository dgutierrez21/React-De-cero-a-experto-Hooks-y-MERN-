import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/context";

import { RouterApp } from "../../router/RouterApp";

jest.mock("../../../node_modules/query-string", () => "");

// Test no finalizado debido a error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app.

// clase: 227. Pruebas en el AppRouter

describe("Pruebas en RouterApp", () => {
  test("Debe mostrar el login si no está auntenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <RouterApp />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    screen.debug();
  });
});
