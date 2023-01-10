import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/GetGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ categoria }) => {
  const { imagenes, cargando } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {cargando && <h2>Cargando..</h2>}
      {imagenes.length === 0 && (
        <h2>No se encontraron resultados para "{categoria}".</h2>
      )}
      <div className="card-grid">
        {imagenes.map((imagen) => (
          <GifItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired,
};
