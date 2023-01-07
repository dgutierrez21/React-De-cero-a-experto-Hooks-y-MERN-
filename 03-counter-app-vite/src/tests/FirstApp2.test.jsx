import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en FirstApp", () => {
  const title = "Hola, soy Goku";
  const subTitle = "Soy un subtitulo";
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el mensaje "Hola, soy Goku', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug()
  });

  test("Debe mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      title
    );
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
