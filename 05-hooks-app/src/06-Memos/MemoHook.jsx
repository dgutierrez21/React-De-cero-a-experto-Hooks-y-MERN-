import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

const heavyStuff = (numeroIteracion = 100) => {
  for (let i = 0; i < numeroIteracion; i++) {
    console.log("Ahí vamos...");
  }

  return `${numeroIteracion} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, incremento } = useCounter(4000);
  const [show, setShow] = useState(true);

  // useMemo memoriza un valor y se va a mantener así a menos que el valor de las dependencias cambien

  // memorizar un valor, digamos que tienes un proceso pesado que tomo tiempo calcular, entonces lo memorizas, y únicamente lo volverás a calcular si los parámetros o argumentos cambian

  const valorMemorizado = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{valorMemorizado}</h4>

      <button className="btn btn-primary" onClick={() => incremento()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Mostrar/Ocultar {JSON.stringify(show)}
      </button>
    </>
  );
};
