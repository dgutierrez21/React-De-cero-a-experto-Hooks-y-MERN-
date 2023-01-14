import { useState } from "react";

export const useCounter = (valorInicial = 10) => {
  const [counter, setCounter] = useState(valorInicial);

  const incremento = (valor = 1) => {
    setCounter((current) => current + valor);
  };

  const decremento = (valor = 1) => {
    if (counter < 1) {
      return;
    }

    setCounter((current) => current - valor);
  };
  const reset = () => {
    setCounter(valorInicial);
  };

  return {
    counter,
    incremento,
    decremento,
    reset,
  };
};
