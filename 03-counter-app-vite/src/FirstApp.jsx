import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, nombre }) => {
  //   if (!title) {
  //     throw new Error("El title no existe");
  //   }

  return (
    <>
      <div data-testid="test-title"> {title} </div>
      <p>{subTitle} </p>
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
