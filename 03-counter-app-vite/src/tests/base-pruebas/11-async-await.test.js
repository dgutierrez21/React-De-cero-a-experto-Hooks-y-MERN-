import { getImagen } from "../../base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe devolver un error", async () => {
    const respuesta = await getImagen();

    expect(respuesta).toBe("No se encontró lo imagen");
  });
});
