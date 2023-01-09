import { GifItem } from "../../src/components/GifItem";
import { render } from "@testing-library/react";

describe("Pruebas en el componente Gifitem", () => {
  const titulo = "Valorant",
    url = "https://afkasflkjasf.com";
  test("Evaluar snapshot", () => {
    const { container } = render(<GifItem titulo={titulo} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
