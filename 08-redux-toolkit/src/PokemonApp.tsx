import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { startLoadingPokemons } from "./store/slices/pokemon/pokemonSlice";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startLoadingPokemons(true));
    dispatch(getPokemons(1)).then((resp) => {
      dispatch(startLoadingPokemons(false));
    });
  }, [dispatch]);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>pokemon1</li>
        <li>pokemon2</li>
        <li>pokemon3</li>
      </ul>
    </>
  );
};
