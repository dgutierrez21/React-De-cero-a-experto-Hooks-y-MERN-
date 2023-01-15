import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/10-useContext/context/UserContext";
import { LoginPage } from "../../src/10-useContext/LoginPage";

const setUser = jest.fn();

beforeEach(() => setUser.mockClear());

describe("Pruebas en LoginPage", () => {
  test("Debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByTestId("pre");

    expect(preTag.textContent).toBe("null");
  });

  test("Debe llamar el setUser cuando se hace click en el botón", () => {
    const user = { id: 123, nombre: "Pedro Perez", email: "pedro@pedro.com" };

    render(
      <UserContext.Provider value={{ user, setUser }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const btnSetUser = screen.getByTestId("btnSetUser");

    fireEvent.click(btnSetUser);

    expect(setUser).toBeCalledWith(user);

    screen.debug();
  });
});
