import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Test en useCounter", () => {
  test("Debe devolver los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, decremento, incremento, reset } = result.current;

    expect(counter).toBe(10);
    expect(incremento).toEqual(expect.any(Function));
    expect(decremento).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter } = result.current;

    expect(counter).toBe(100);
  });
});
