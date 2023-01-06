import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

import heroes from "../../data/heroes";

describe("Prueba en el archivo 08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por ID", () => {
    const id = 1,
      hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefined si no existe", () => {
    const id = 100,
      hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  // Tarea
  test("getHeroesByOwner Debe devolver un arreglo con los héroes de DC", () => {
    const owner = "DC",
      ownerArr = getHeroesByOwner(owner);

    expect(ownerArr.length).toBe(3);

    expect(ownerArr).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test("getHeroesByOwner Debe devolver un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel",
      ownerArr = getHeroesByOwner(owner);

    expect(ownerArr.length).toBe(2);

    expect(ownerArr).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
