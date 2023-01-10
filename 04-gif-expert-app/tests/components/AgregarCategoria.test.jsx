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

    const onNuevaCategoria = jest.fn(); // sumulación de la función

    render(<AgregarCategoria onNuevaCategoria={onNuevaCategoria} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: valorInput } });
    fireEvent.submit(form);

    screen.debug();

    expect(input.value).toBe("");

    expect(onNuevaCategoria).toHaveBeenCalled(); // si la función fue llamada
    expect(onNuevaCategoria).toHaveBeenCalledTimes(1); // si la prueba fue llamada 1 vez

    expect(onNuevaCategoria).toHaveBeenCalledWith(valorInput); // evaluar si ha sido llamada con x valor
  });

  test("No debe llamar el onNuevaCategoria si el input esta vacio", () => {
    render(<AgregarCategoria onNuevaCategoria={onNuevaCategoria} />);

    const onNuevaCategoria = jest.fn(); // sumulación de la función

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNuevaCategoria).not.toHaveBeenCalled();
  });
});
