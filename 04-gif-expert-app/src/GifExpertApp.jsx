import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  console.log(categorias);

  const agregarCategoria = () => {
    // categorias.push("Valorant")
    // Nunca se recomienda mutar el estado directamente.
    //  push mutará la matriz existente.
    // Se Necesita pasar un nueva matriz a setCategorias. No puede ( útilmente ) pasar ese número o la matriz original ( pero mutada ) ( ya que detectaría que es la misma matriz y no haría nada ).

    setCategorias(["Valorant", ...categorias]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AgregarCategoria />

      {/* listado de gif */}
      <button onClick={agregarCategoria}>Agregar</button>
      <ol>
        {categorias.map((categoria) => (
          <li key={categorias.indexOf(categoria)}>{categoria}</li>
        ))}
      </ol>
      {/* gif item */}
    </>
  );
};
