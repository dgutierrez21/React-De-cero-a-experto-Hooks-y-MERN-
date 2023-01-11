import { useCounter, useFetch } from "../hooks/";
import { CargandoCita, Cita } from "../03-examples/components";

export const Layout = () => {
  const { counter, incremento } = useCounter(1);

  console.log(counter);

  const { data, cargando, error } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {cargando ? <CargandoCita /> : <Cita author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        onClick={() => incremento()}
        disabled={cargando}
      >
        Next Quote
      </button>
    </>
  );
};
