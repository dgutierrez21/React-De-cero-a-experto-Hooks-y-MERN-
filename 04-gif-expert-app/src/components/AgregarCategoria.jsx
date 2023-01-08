import { useState } from "react";

export const AgregarCategoria = ({ setCategorias }) => {
  const [valorInput, setValorInput] = useState("");

  const cambiarInput = (event) => {
    setValorInput(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    console.log(valorInput);

    if (valorInput.trim().length < 2) {
      return;
    }

    setCategorias((prevCategorias) => [valorInput, ...prevCategorias]);
    // el Hook useState devuelve una variable con el valor del estado actual y una función con la que puedes actualizar éste valor, la función siempre apuntará a la dirección de memoria de cualquier valor que le pasas, en el ejemplo el callback setCategories está apuntando a la dirección del último valor que le asignaste.

    setValorInput("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={valorInput}
        onChange={cambiarInput}
      />
    </form>
  );
};
