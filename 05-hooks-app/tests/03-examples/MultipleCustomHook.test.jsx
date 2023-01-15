import { render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";

describe("Pruebas en MultipleCustomHook", () => {
  test("Debe mostrar el componente por defecto", () => {
    render(<MultipleCustomHook />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBeTruthy();
    expect(nextButton.disabled);

    screen.debug();
  });
});
