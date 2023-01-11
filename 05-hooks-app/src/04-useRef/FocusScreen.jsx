import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef(); // nos permite mantener una referencia y que cuando esa referencia cambia, no se vuelva a rerenderizar el componente

  console.log(inputRef);
  const formClick = () => {
    // document.querySelector("input").select()

    // console.log(inputRef);

    inputRef.current.select();
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />

      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-3"
      />

      <button className="btn btn-primary mt-3" onClick={formClick}>
        Focus
      </button>
    </>
  );
};
