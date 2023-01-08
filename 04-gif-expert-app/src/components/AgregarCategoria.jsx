import { useState } from "react";

export const AgregarCategoria = () => {
  const [valorInput, setValorInput] = useState("One Punch");

  const cambiarInput = (event) => {
    setValorInput(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    console.log(valorInput);
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
