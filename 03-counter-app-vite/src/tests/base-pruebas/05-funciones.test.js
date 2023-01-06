import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Fernando";

    const testUsuarioActivo = {
      uid: "ABC567",
      username: nombre,
    };

    const usuarioA = getUsuarioActivo(nombre);

    expect(usuarioA).toEqual(testUsuarioActivo);
  });
});
