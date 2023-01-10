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

  test("Debe de llamar onNuevaCategoria si el input tiene un valor", () => {
    const valorInput = "Saitama";

    render(<AgregarCategoria onNuevaCategoria={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: valorInput } });
    fireEvent.submit(form);

    screen.debug();

    expect(input.value).toBe("");
  });
});
