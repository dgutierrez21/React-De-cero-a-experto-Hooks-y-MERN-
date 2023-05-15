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
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      console.log("Recibido");
      state.value = action.payload;
    });
    builder.addCase(getPokemons.pending, (state, action) => {
      console.log("Pendiente");
    });
    builder.addCase(getPokemons.rejected, (_, action) => {
      console.log("Rechazado");
    });
  },
});

export const { startLoadingPokemons } = pokemonSlice.actions;
