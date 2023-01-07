import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, nombre }) => {
  //   if (!title) {
  //     throw new Error("El title no existe");
  //   }

  return (
    <>
      <h1>{title} </h1>
      <p>{subTitle} </p>
      <p>{nombre} </p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  // title: "No hay titulo", 
  subTitle: "No hay subtitulo",
  nombre: "Pedro sanchez",
};

export default FirstApp;
