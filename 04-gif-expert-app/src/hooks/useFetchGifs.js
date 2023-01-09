import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (categoria) => {
  const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(true);

  // El gancho useEffect le permite realizar efectos secundarios en sus componentes.

  // Algunos ejemplos de efectos secundarios son: obtención de datos, actualización directa del DOM y temporizadores.

  // useEffect acepta dos argumentos. El segundo argumento es opcional.

  //   useEffect(<función>, <dependencia>)

  const getImagenes = async () => {
    const nuevasImagenes = await getGifs(categoria);
    setImagenes(nuevasImagenes);
    setCargando(false);
  };

  useEffect(() => {
    getImagenes();
  }, []);

  return {
    imagenes,
    cargando,
  };
};
