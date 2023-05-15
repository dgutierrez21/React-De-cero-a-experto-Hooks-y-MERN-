import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface pokemonState {
  page: number;
  pokemons: any[];
  isLoading: boolean;
}

const initialState: pokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setPokemons: (state, action: PayloadAction<any>) => {
      //...
    },
  },
});

export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions;
