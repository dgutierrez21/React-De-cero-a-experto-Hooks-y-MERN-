import { render, screen } from "@testing-library/react";
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
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    screen.debug();

    expect(screen.getByText("Ruta pública")).toBeTruthy();
  });
});
