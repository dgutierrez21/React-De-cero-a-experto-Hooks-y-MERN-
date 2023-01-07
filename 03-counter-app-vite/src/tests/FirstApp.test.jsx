import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en FirstApp", () => {
  // test("Debe de hacer match con el snapshot", () => {
  //   const title = "Hola, soy Goku";
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("Debe mostrar el titulo en un h1", () => {
    const title = "Hola, soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.textContent).toContain(title);

    expect(getByTestId("test-title").textContent).toContain(title);
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, soy Goku";
    const subtitle = "Soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
