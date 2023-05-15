import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});

// Inferir los tipos `RootState` y `AppDispatch` de la propia tienda
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
