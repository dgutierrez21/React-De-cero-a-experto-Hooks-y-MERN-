import { fireEvent, render, screen } from "@testing-library/react";
import { AgregarCategoria } from "../../src/components/";

describe("Pruebas en </AgregarCategoria", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AgregarCategoria onNuevaCategoria={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");

    screen.debug();
  });
});
