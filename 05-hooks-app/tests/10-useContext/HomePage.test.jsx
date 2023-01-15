import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/10-useContext/context/UserContext";
import { HomePage } from "../../src/10-useContext/HomePage";

describe("Pruebas en HomePage", () => {
  const user = {
    id: 1,
    name: "Pedro",
  };
  test("Debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByTestId("pre");

    expect(preTag.textContent).toBe("null");

    // screen.debug();
  });

  test("Debe mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByTestId("pre");

    expect(preTag.textContent).toBe(JSON.stringify(user, null, 3));
    screen.debug();
  });
});
