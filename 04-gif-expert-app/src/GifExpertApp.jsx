import { useState } from "react";
import { AgregarCategoria, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch"]);

  console.log(categorias);

  const onAgregarCategoria = (nuevaCategoria) => {
    // categorias.push("Valorant")
    // Nunca se recomienda mutar el estado directamente.
    //  push mutará la matriz existente.
    // Se Necesita pasar un nueva matriz a setCategorias. No puede ( útilmente ) pasar ese número o la matriz original ( pero mutada ) ( ya que detectaría que es la misma matriz y no haría nada ).

    const nuevaCategoriaUpper =
      nuevaCategoria[0].toUpperCase() + nuevaCategoria.substring(1);

    if (categorias.includes(nuevaCategoriaUpper)) {
      return;
    }

    setCategorias([nuevaCategoriaUpper, ...categorias]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AgregarCategoria
        // setCategorias={setCategorias}
        onNuevaCategoria={(event) => onAgregarCategoria(event)}
      />

      {categorias.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
};
