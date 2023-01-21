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
});
