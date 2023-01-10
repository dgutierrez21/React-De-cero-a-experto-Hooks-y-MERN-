import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe("Pruebas en <GifGrid/>", () => {
  const categoria = "One Punch";
  test("Debe mostrar el loading al inicio", () => {
    render(<GifGrid categoria={categoria} />);
    screen.debug();

    expect(screen.getByText("Cargando.."));
    expect(screen.getByText(categoria));
  });
});
