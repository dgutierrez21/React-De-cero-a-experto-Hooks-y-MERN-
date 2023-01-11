import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    nombreUsuario: "",
    email: "",
    password: "",
  });

  const { nombreUsuario, email, password } = formState;

  // useEffect(() => {
  //   console.log("El useEffect se llamó");
  // }, []);

  // useEffect(() => {
  //   console.log("formState ha cambiado");
  // }, [formState]);

  // useEffect(() => {
  //   console.log("email ha cambiado");
  // }, [email]);

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

      <input
        type="password"
        className="form-control mt-3"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-3" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
