import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/GetGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categoria }) => {
  const { imagenes, cargando } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {cargando && <h2>Cargando..</h2>}
      <div className="card-grid">
        {imagenes.map((imagen) => (
          <GifItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};
