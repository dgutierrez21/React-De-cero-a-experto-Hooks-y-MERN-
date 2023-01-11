import { useState } from "react";
import { useEffect } from "react";

export const Mensaje = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("Mensaje montado");

    const onMouseMove = ({ x, y }) => {
      //   const cords = { x, y };
      //   console.log(cords);

      setCords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(cords)}
    </>
  );
};
