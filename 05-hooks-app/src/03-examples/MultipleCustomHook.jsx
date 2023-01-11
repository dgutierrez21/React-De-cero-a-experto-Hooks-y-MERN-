import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { data, cargando, error } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/1"
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {cargando ? (
        <div className="alert alert-info text-center">Cargando...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
    </>
  );
};
