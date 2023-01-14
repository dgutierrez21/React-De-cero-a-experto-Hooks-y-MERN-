import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks";

describe("Pruebas en el useForm", () => {
  const formInicial = {
    name: "Pedro",
    email: "pedro@pedro.com",
  };
  test("Debe devolver los valores por defecto", () => {
    const { result } = renderHook(() => useForm(formInicial));

    expect(result.current).toEqual({
      ...formInicial,
      formState: formInicial,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe cambiar el nombre del formulario", () => {
    const nuevoValor = "Martin";

    const { result } = renderHook(() => useForm(formInicial));

    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: nuevoValor,
        },
      });
    });

    console.log(result.current);

    expect(result.current.name).toBe(nuevoValor);
    expect(result.current.formState.name).toBe(nuevoValor);
  });

  test("Debe cambiar el nombre del formulario", () => {
    const nuevoValor = "Martin";

    const { result } = renderHook(() => useForm(formInicial));

    const { onResetForm, onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: nuevoValor,
        },
      });

      onResetForm();
    });

    console.log(result.current);

    expect(result.current.name).toBe(formInicial.name);
    expect(result.current.formState.name).toBe(formInicial.name);
  });
});
