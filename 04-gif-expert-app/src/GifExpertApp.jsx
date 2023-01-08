import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  console.log(categorias);

  const onAgregarCategoria = (valor) => {
    // categorias.push("Valorant")
    // Nunca se recomienda mutar el estado directamente.
    //  push mutará la matriz existente.
    // Se Necesita pasar un nueva matriz a setCategorias. No puede ( útilmente ) pasar ese número o la matriz original ( pero mutada ) ( ya que detectaría que es la misma matriz y no haría nada ).

    setCategorias([valor, ...categorias]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AgregarCategoria
        // setCategorias={setCategorias}
        onNuevaCategoria={(event) => onAgregarCategoria(event)}
      />

      {/* listado de gif */}

      <ol>
        {categorias.map((categoria) => (
          <li key={categorias.indexOf(categoria)}>{categoria}</li>
        ))}
      </ol>
      {/* gif item */}
    </>
  );
};
