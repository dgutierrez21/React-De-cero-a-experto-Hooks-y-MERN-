import React from "react";
// import { memo } from "react";

// Memoriza el componente, haciendo que solo se vuelva a renderizar cuando los properties cambian, todo esto ayuda en la optimización de toda la app en aplicaciones grandes

// esta es la forma común en la que se usa, ya que, se puede ver con claridad que se está usando de React
export const Small = React.memo(({ valor }) => {
  console.log("Me volvi a dibujar");
  return <small>{valor}</small>;
});
