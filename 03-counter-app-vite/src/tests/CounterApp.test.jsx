import CounterApp from "../CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

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

  test("Debe incrementar con el botón +1", () => {
    // sujeto de pruebas
    render(<CounterApp value={valorInicial} />);

    // aplicar un estimulo
    fireEvent.click(screen.getByText("+1"));

    // comportamiento esperador despues del estimulo
    expect(screen.getByText(valorInicial + 1)).toBeTruthy();
  });

  test("Debe decrementar con el botón -1", () => {
    render(<CounterApp value={valorInicial} />);

    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByText(valorInicial - 1)).toBeTruthy();
  });

  test("Debe de funcionar el botón de reset", () => {
    render(<CounterApp value={valorInicial} />);

    fireEvent.click(screen.getByText("-1"));

    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe(
      String(valorInicial)
    );
  });
});
