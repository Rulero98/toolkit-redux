import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, pokemonSlice } from "./slices";
import { todosApi } from "./apis/todosApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,

  },
  middleware: (getDefaulMiddelware) => getDefaulMiddelware().concat(todosApi.middleware)
})