import { usContext } from "../../base-pruebas/06-deses-obj";

describe("Pruebas en el archivo 06-deses-obj", () => {
  test("usContext debe devolver un objeto", () => {
    const clave = 2394,
      edad = 30;

    const testUsContext = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const use = usContext({ clave, edad });

    expect(use).toEqual(testUsContext);
  });
});
