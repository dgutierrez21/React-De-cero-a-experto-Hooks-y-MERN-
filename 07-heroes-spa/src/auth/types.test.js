import { types } from "./types/types";

describe("Pruebas en types", () => {
  test("Debe devolver estos mismo types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
