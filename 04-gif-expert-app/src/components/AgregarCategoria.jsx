import { useState } from "react";

export const AgregarCategoria = ({ onNuevaCategoria }) => {
  const [valorInput, setValorInput] = useState("");

  const cambiarInput = (event) => {
    setValorInput(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    const valorInputSubmit = valorInput.trim();

    console.log(valorInput);

    if (valorInputSubmit.length < 2) {
      return;
    }

    // setCategorias((prevCategorias) => [valorInput, ...prevCategorias]);
    // el Hook useState devuelve una variable con el valor del estado actual y una función con la que puedes actualizar éste valor, la función siempre apuntará a la dirección de memoria de cualquier valor que le pasas, en el ejemplo el callback setCategories está apuntando a la dirección del último valor que le asignaste.

    onNuevaCategoria(valorInputSubmit);

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
