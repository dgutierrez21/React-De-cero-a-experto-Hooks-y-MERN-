import { useState } from "react";

export const useCounter = (valorInicial = 10) => {
  const [counter, setCounter] = useState(valorInicial);

  return {
    counter,
  };
};
