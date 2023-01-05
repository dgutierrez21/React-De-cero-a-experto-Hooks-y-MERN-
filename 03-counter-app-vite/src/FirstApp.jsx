const nuevoMensaje = {
  mensaje: "Hola Mundo obj",
  autor: "Pedro",
  enviarMensaje: false,
};

const autores = ["Pedro", "Juan", "Fernando", false, 10];

const miFunc = (nombre) => `Hola ${nombre}`;

const booleano = true;

const primitivo = 30 * 6;

export const FirstApp = ({title, subTitle}) => {
  // si no hay ninguna dependencia del componente a las funciones o viceversa, se recomienda poner las varibles fuera del componente
  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle + 20}</h2>
      <h2>Soy una función: {miFunc("Alberto")} </h2>
      <h2>Soy un valor primitivo:{primitivo} </h2>
      <h2>Soy un arreglo: {autores} </h2>
      <h2>Soy un arreglo: {String(autores)} </h2>
      <h2>Soy un booleano: {booleano} </h2>
      <h2>Soy un booleano: {String(booleano)} </h2>
      <h2>
        Soy un objeto <code>{JSON.stringify(nuevoMensaje)}</code>
      </h2>
      <h2>Soy un objeto: {nuevoMensaje.mensaje}</h2>
      <h2>Soy un objeto: {String(nuevoMensaje.enviarMensaje)}</h2>
    </>
  );
};

export default FirstApp;
