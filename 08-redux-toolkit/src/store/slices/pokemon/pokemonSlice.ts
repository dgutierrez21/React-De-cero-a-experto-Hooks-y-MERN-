import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "./thunks";

interface pokemonState {
  value: {
    page: number;
    pokemons: any[];
    isLoading: boolean;
  };
}

const initialState: pokemonState = {
  value: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state, { payload }: PayloadAction<boolean>) => {
      state.value.isLoading = payload;
    },
    setPokemons: (state, action: PayloadAction<any>) => {
      //...
    },
  },
});

export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions;
