import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoaddig: false
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoaddig = true
    },
    setPokemons: (state, action) => {
      state.isLoaddig = false
      state.page = action.payload.page,
      state.pokemons = action.payload.pokemons
    }
  }
});
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;