import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "../../../api/pokemonApi";

interface Pokemon {
  page: number;
  pokemons: any[];
  isLoading: boolean;
}

interface rejectWithError {
  msg: string;
}

export const getPokemons = createAsyncThunk<
  Pokemon,
  number,
  { rejectValue: rejectWithError }
>("pokemon/getPokemons", async (page: number, thunkApi) => {
  try {
    // TODO: Realizar peticion http

    const response = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    const data: Pokemon = {
      isLoading: false,
      page,
      pokemons: response.data.results,
    };

    return thunkApi.fulfillWithValue(data);
  } catch (error) {
    return thunkApi.rejectWithValue({ msg: "Error al realizar la conexión" });
  }
});
