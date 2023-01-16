import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../routes";

describe("Pruebas en MainApp", () => {
  test("Debe mostrar el HomePage", () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("Debe mostrar el LoginPage", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByText("LoginPage")).toBeTruthy();

    screen.debug();
  });
});
