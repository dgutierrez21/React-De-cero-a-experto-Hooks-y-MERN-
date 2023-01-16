import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [estado, setEstado] = useState({
    data: null,
    cargando: true,
    error: null,
  });

  const getFetch = async () => {
    setEstado({
      ...estado,
      cargando: true,
    });

    const resp = await fetch(url),
      data = await resp.json();

    console.log(data);

    setEstado({
      data,
      cargando: false,
      error: null,
    });
  };
  useEffect(() => {
    getFetch();
  }, [url]);

  return estado;
};
