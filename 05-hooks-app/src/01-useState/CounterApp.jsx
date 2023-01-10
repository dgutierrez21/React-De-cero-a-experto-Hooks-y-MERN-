import { useState } from "react";

export const CounterApp = () => {
  const [contador, setContador] = useState({
    contador1: 10,
    contador2: 20,
    contador3: 30,
  });

  const { contador1, contador2, contador3 } = contador;
  return (
    <>
      <h1>Counter1: {contador1} </h1>
      <h1>Counter2: {contador2} </h1>
      <h1>Counter3: {contador3} </h1>

      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setContador({
            ...contador,
            contador1: contador1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
