import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en el helper getGifs", () => {
  test("Debe devolver un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBeGreaterThan(0); // es mayor a 0
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      titulo: expect.any(String),
      url: expect.any(String),
    });
  });
});
