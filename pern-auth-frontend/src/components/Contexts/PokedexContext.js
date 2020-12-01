// import { formatMs } from '@material-ui/core'
import React, { useState, createContext } from 'react'
import Pokedex from 'pokedex-promise-v2'

export const PokedexContext = createContext()

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([])
  const P = new Pokedex()
  P.getPokemonsList().then((response) => setPokedex(response.results))

  return (
    <PokedexContext.Provider value={[pokedex]}>
      {children}
    </PokedexContext.Provider>
  )
}
