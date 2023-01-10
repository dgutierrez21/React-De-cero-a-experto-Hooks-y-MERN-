import { useEffect } from "react";
import { useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    nombreUsuario: "JJ2",
    email: "jj2@google.com",
  });

  const { nombreUsuario, email } = formState;

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("El useEffect se llamó");
  });

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Nombre Usuario"
        name="nombreUsuario"
        value={nombreUsuario}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-3"
        placeholder="user@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
