import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('getSaludo debe retornar "Hola Fernando', () => {
    const nombre = "Fernando",
      mensaje = getSaludo(nombre);

    expect(mensaje).toBe(`Hola ${nombre}`);
  });
});
