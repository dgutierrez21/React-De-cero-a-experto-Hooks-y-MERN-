describe("Pruebas en <DemoComponent />", () => {
  test("Esta prueba no debe fallar", () => {
    // 1. inicialización
    const mensaje1 = "Hola mundo";

    // 2. estimulo
    const mensaje2 = mensaje1.trim();

    // 3. observar el comportamiento esperado

    // expect(valor)
    // La función expect se utiliza cada vez que se desea comprobar un valor. Rara vez se llama a expect por sí sola. En su lugar, utilizará expect junto con una función "matcher" para afirmar algo sobre un valor.

    // toBe() --- sirve para comparar, en este caso, si mensaje1 es igual a mensaje2

    expect(mensaje1).toBe(mensaje2);
  });
});
