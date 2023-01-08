import { useState } from "react";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  console.log(categorias);

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}

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
