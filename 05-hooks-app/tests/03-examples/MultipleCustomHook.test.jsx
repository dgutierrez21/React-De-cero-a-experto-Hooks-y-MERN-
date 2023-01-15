import { render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");

describe("Pruebas en MultipleCustomHook", () => {
  test("Debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      cargando: true,
      error: null,
    });

    render(<MultipleCustomHook />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBeTruthy();
    expect(nextButton.disabled);

    screen.debug();
  });

  test("Debe mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Francisco", quote: "Hola Mundo" }],
      cargando: false,
      error: null,
    });

    render(<MultipleCustomHook />);
    screen.debug();

    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Francisco")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBeFalsy();
  });
});
