// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices"

export const PokeApp = () => {

  const dispatch = useDispatch()

  const { pokemons, page, isLoading } = useSelector(state => state.pokemon)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>Poke App</h1>
      <hr />

      <ul>

        <span>Loading: {isLoading ? 'True' : 'False'} </span>
        <br />
        <br />
        {pokemons?.map(pokemon => {
          return <ol key={pokemon.name}>
            {pokemon.name}
          </ol>

        })}
      </ul>
      <button onClick={() => (dispatch(getPokemons(page - 1)))}>Previous page</button>
      <button onClick={() => (dispatch(getPokemons(page + 1)))}>Next page</button>
    </>
  )
}
