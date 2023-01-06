import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  {
    test("Debe devolver un string y un número", () => {
      const [letras, numeros] = retornaArreglo();

      expect(typeof letras).toBe("string");
      expect(typeof numeros).toBe("number");
    });
  }
});
