const valor = 5;

test("Mi primera prueba", () => {
  if (valor === 0) {
    throw new Error("El valor ingresado no puede ser igual a cero.");
  }
});
