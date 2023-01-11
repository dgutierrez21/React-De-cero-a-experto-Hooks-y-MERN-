import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Cita = ({ author, quote }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  // es parecido al useEffect a diferencia de que se ejecuta cuando todo se ha renderizado
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();

    setBoxSize({ height, width });
  }, []);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="mb-2" ref={pRef}>
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code> {JSON.stringify(boxSize)} </code>
    </>
  );
};
