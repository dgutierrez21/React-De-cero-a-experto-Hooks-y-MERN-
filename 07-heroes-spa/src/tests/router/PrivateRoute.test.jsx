import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import { PrivateRoute } from "../../router/PrivateRoute";

describe("Pruebas en el PrivateRoute", () => {
  test("Si está autenticado, debe mostrar el children y guardar en localStorage", () => {
    Storage.prototype.setItem = jest.fn();

    const valorContexto = {
      logged: true,
      user: {
        id: "cba",
        name: "Marcos",
      },
    };
    render(
      <AuthContext.Provider value={valorContexto}>
        <MemoryRouter initialEntries={["/search?q=spider"]}>
          <PrivateRoute>
            <h1>Rutas privadas</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();

    expect(screen.getByText("Rutas privadas")).toBeTruthy();
    expect(localStorage.setItem).lastCalledWith("lastPath", "/search?q=spider");
  });

  test("Debe cambiar la ruta actual si no está autenticado", () => {
    const valorContexto = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={valorContexto}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Routes>
            <Route
              path="marvel"
              element={
                <PrivateRoute>
                  <h1>Marvel Page</h1>
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<h1>Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();

    expect(screen.getByText("Login Page")).toBeTruthy();
  });
});
