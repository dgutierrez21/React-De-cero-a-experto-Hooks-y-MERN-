import CounterApp from "../CounterApp";
import { render, screen } from "@testing-library/react";

describe("Pruebas en CounterApp", () => {
  const valorInicial = 100;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={valorInicial} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={valorInicial} />);

    expect(screen.getByText(100).textContent).toBeTruthy();
    
    // expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
    //   String(valor)
    // );
  });
});
