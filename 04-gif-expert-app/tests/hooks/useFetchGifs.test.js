import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe devolver el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    const { imagenes, cargando } = result.current;

    expect(imagenes.length).toBe(0);
    expect(cargando).toBeTruthy();
  });

  test("Debe devolver un arreglo de imagenes y el 'cargando' en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(() =>
      expect(result.current.imagenes.length).toBeGreaterThan(0)
    );

    const { imagenes, cargando } = result.current;

    expect(imagenes.length).toBeGreaterThan(0);
    expect(cargando).toBeFalsy();
  });
});
