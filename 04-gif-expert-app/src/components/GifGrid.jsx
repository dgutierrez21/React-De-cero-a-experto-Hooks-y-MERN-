import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const GifGrid = ({ categoria }) => {
  const [imagenes, setImagenes] = useState([]);

  // El gancho useEffect le permite realizar efectos secundarios en sus componentes.

  // Algunos ejemplos de efectos secundarios son: obtención de datos, actualización directa del DOM y temporizadores.

  // useEffect acepta dos argumentos. El segundo argumento es opcional.

  // useEffect(<función>, <dependencia>)

  const getImagenes = async () => {
    const nuevasImagenes = await getGifs(categoria);
    setImagenes(nuevasImagenes);
  };

  useEffect(() => {
    getImagenes();
  }, []);

  return (
    <>
      <h3>{categoria}</h3>

      <ol>
        {imagenes.map(({ id, titulo }) => (
          <li key={id}>{titulo}</li>
        ))}
      </ol>
    </>
  );
};
