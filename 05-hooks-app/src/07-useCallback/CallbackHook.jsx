import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MostrarIncremento } from "./MostrarIncremento";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // es parecido a useMemo, con la diferencia de que sirve para memorizar funciones
  const incremento = useCallback((valor) => {
    setCounter((valorActual) => valorActual + valor);
  }, []);

  //   const incremento = () => {
  //     setCounter(counter + 1);
  //   };

  //   uso 2: disparar una efecto cuando esa función cambie
//   useEffect(() => {
//     incremento();
//   }, [incremento]);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <MostrarIncremento incremento={incremento} />
    </>
  );
};

// En resumen...

// useCallback: memoriza funciones, es un hook |

// useMemo: memoriza valores, es un hook |

// memo: memoriza componentes, es un HOC.
