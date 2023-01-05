import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //  valor actual | función para actualizar el valor | valor inicial
  const [contador, setContador] = useState(value);

  const handleAdd = () => {
    // console.log(event);

    // setContador((c) => c + 1)

    setContador(contador + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{contador}</h2>

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
