import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const GifGrid = ({ categoria }) => {
  const [contador, setContador] = useState(10);

  // El gancho useEffect le permite realizar efectos secundarios en sus componentes.

  // Algunos ejemplos de efectos secundarios son: obtención de datos, actualización directa del DOM y temporizadores.

  // useEffect acepta dos argumentos. El segundo argumento es opcional.

  // useEffect(<función>, <dependencia>)

  useEffect(() => {
    getGifs(categoria);
  }, []);

  return (
    <>
      <h3>{categoria}</h3>

      <h5>{contador}</h5>

      <button onClick={() => setContador(contador + 1)}>+1</button>
    </>
  );
};
