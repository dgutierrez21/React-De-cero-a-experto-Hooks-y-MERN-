import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
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

  test("Debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, incremento } = result.current;

    act(() => {
      incremento();
      incremento(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test("Debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));

    const { decremento } = result.current;

    act(() => {
      decremento();
      decremento(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test("Debe realizar el reset", () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, incremento } = result.current;

    act(() => {
      incremento(10);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
