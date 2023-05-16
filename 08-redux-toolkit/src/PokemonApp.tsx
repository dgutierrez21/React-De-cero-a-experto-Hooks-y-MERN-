import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  nextPage,
  startLoadingPokemons,
} from "./store/slices/pokemon/pokemonSlice";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useAppDispatch();

  const { pokemons, page, isLoading } = useAppSelector(
    (state) => state.pokemons.value
  );

  useEffect(() => {
    dispatch(startLoadingPokemons(true));
    dispatch(getPokemons(page)).then((resp) => {
      dispatch(startLoadingPokemons(false));
    });
  }, [dispatch, page]);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {isLoading && (
        <h2>
          {pokemons.length !== 0
            ? "Cargando nuevos pokemons..."
            : "Cargando Pokemons..."}
        </h2>
      )}
      <ul>
        {pokemons.map(({ name }) => {
          return (
            <li key={name}>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(nextPage())}>
        next
      </button>
    </>
  );
};
