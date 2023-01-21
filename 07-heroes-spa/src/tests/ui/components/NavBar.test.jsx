import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/context";
import { Navbar } from "../../../ui/components";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en Navbar", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Oscar",
      id: "234",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar el nombre en el navbar si está logeado", () => {
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test("Al presionar el botón logout, debe llamar a la función login", () => {
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    screen.debug();

    fireEvent.click(screen.getByText("Logout"));

    expect(contextValue.logout).toHaveBeenCalled();

    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
