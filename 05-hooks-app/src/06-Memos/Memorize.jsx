import React from "react";
import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, incremento } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small valor={counter} />
      </h1>
      <hr />

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
