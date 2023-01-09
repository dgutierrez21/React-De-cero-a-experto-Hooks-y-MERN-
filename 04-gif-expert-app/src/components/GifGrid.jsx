import { getGifs } from "../helpers/GetGifs";

export const GifGrid = ({ categoria }) => {
  getGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      <p>Hola Mundo</p>
    </>
  );
};
