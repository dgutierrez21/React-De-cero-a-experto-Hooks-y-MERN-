import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  // setup function: para no repetir el setup de las pruebas repetidas veces
  const setup = () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form", { name: "form" });
    return {
      input,
      form,
    };
  };

  test("Debe tener GifExpertApp en h1", () => {
    setup();
    screen.debug();

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "GifExpertApp"
    );
  });

  test("Debe añadir una categoría si no se repite", () => {
    const { input, form } = setup();

    fireEvent.change(input, { target: { value: "Valorant" } });
    fireEvent.submit(form);

    screen.debug();

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });

  test("NO debe añadir categoría si se repite", () => {
    const { input, form } = setup();

    fireEvent.change(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });
});
