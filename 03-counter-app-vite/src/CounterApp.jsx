import PropTypes from "prop-types";

const handleAdd = (event) => console.log(event);

const CounterApp = ({ value }) => {
  // si una funcion no ocupa nada del componente en el cual esta alojada, se recomienda tenerla fuera del componente

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
