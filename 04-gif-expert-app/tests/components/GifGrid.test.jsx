import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs"); // objeto que imita la interfaz y propiedades de una función real, o una clase, o un módulo, o cualquier otro elemento de software

describe("Pruebas en <GifGrid/>", () => {
  const categoria = "One Punch";
  test("Debe mostrar el loading al inicio", () => {
    useFetchGifs.mockReturnValue({
      imagenes: [],
      cargando: true,
    });

    render(<GifGrid categoria={categoria} />);
    screen.debug();

    expect(screen.getByText("Cargando.."));
    expect(screen.getByText(categoria));
  });

  test("Debe mostrar items cuando se cargan las imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "REI",
        titulo: "Saitama",
        url: "https://asfldj/asldf.jpg",
      },
      {
        id: "GKU",
        titulo: "Goku",
        url: "https://asfldj/goku.jpg",
      },
      {
        id: "VAL",
        titulo: "Valorant",
        url: "https://asfldj/valorant.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      imagenes: gifs,
      cargando: false,
    });

    render(<GifGrid categoria={categoria} />);
    screen.debug();

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
  });
});
