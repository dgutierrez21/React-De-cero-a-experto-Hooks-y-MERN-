import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages";

describe("Pruebas en SearchPage", () => {
  test("Debe mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    screen.debug();

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar batman y el input con el valor del query string", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    screen.debug();

    const inputValue = screen.getByRole("textbox").value;

    expect(inputValue).toBe("batman");

    const srcImg = screen.getByRole("img").src;

    expect(srcImg).toContain("/assets/heroes/dc-batman.jpg");

    const searchHeroAlert = screen.getByTestId("searchHeroAlert");
    const styles = getComputedStyle(searchHeroAlert);

    expect(styles.display).toBe("none");
  });
});
