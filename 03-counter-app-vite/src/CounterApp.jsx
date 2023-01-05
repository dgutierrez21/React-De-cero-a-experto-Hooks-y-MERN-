import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //  valor actual | función para actualizar el valor | valor inicial
  const [contador, setContador] = useState(value);

  // Cada vez que cambia el estado, se vuelve a ejecutar todo el componente
  console.log("Render");

  const handleAdd = () => {
    // console.log(event);

    // setContador((c) => c + 1)

    setContador(contador + 1);
  };

  const handleSubstract = () => {
    setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{contador}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;

// Nota: Funcionamiento de useState (setCounter)

// La razón por la cuál es permitido usar:

// setCounter(counter + 1);
// setCounter(counter - 1);
// setCounter(value);

// Y NO está permitido usar:

// setCounter(counter = counter + 1);
// setCounter(counter++);
// setCounter(counter--);
// (Y otras operaciones en la constante)

// Es por que el useState (En este caso la función setCounter), está creando una nueva constante con el mismo nombre de 'counter' en vez de modificar su valor (el valor de la actual constante), por esa misma razón cuando se intenta modificar el valor de una constante sale un error, más sin embargo, cuando se usa la función sin modificar a la constante, funciona.
