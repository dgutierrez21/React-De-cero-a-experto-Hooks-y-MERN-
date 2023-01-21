import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en SearchPage", () => {
  beforeEach(() => jest.clearAllMocks());

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

  test("Debe mostrar un error si no se encuentra el hero", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );

    screen.debug();

    const noHeroAlert = screen.getByTestId("noHeroAlert");
    const styles = getComputedStyle(noHeroAlert);

    expect(styles.display).not.toBe("none");
  });

  test("Debe llamar el navigate a la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    screen.debug();

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { name: "searchText", value: "superman" },
    });

    console.log(input.value);

    const form = screen.getByTestId("form");

    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=superman");
  });
});
