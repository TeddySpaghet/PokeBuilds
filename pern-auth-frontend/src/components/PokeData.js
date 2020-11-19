import React, { useState, useEffect } from 'react'
import Pokedex from 'pokedex-promise-v2'

const PokeData = ({
  selectedPokemon,
  selectedPokemonData,
  setSelectedPokemonData,
}) => {
  const getPokemonData = () => {
    const P = new Pokedex()
    if (selectedPokemon) {
      P.getPokemonByName(selectedPokemon[0].name).then((response) =>
        setSelectedPokemonData(response)
      )
      console.log('this is running right now!!!!')
    }
  }

  useEffect(() => {
    getPokemonData()
  }, [selectedPokemon])

  return <></>
}

export default PokeData
