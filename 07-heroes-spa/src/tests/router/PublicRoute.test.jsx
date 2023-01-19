import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import { PublicRoute } from "../../router/PublicRoute";

describe("Pruebas en PublicRoute", () => {
  test("Si no se está autenticado, debe mostrar el children", () => {
    const valorContexto = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={valorContexto}>
        <PublicRoute>
          <h1>Login Page</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    screen.debug();

    expect(screen.getByText("Login Page")).toBeTruthy();
  });

  test("Debe cambiar la ruta actual si está autenticado", () => {
    const valorContexto = {
      logged: true,
      user: {
        name: "Mateo",
        id: "345",
      },
    };

    render(
      <AuthContext.Provider value={valorContexto}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Login Page</h1>
                </PublicRoute>
              }
            />

            <Route path="/marvel" element={<h1>Página marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();

    expect(screen.getByText("Página marvel")).toBeTruthy();
  });
});
