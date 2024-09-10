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
      console.log(action)
    }
  }
});
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;