import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { data, cargando, error } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/1"
  );

  console.log({ data, cargando, error });

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
    </>
  );
};
