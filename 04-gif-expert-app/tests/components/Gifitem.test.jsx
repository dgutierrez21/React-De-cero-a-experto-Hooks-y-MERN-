import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe("Pruebas en el componente Gifitem", () => {
  const titulo = "Valorant",
    url = "https://afkasflkjasf/jsdjff.jpg";
  test("Evaluar snapshot", () => {
    const { container } = render(<GifItem titulo={titulo} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem titulo={titulo} url={url} />);

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(titulo);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(titulo);
  });

  test("El titulo se muestra en el componente", () => {
    render(<GifItem titulo={titulo} url={url} />);

    expect(screen.getAllByText(titulo)).toBeTruthy();
  });
});
