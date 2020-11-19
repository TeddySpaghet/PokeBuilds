import React, {useState, useEffect} from 'react'

export const PokeData = () => {
    const [selectedPokemonData, setSelectedPokemonData] = useState({})
    const getPokemonData = () => {
        const P = new Pokedex()
        if (selectedPokemon) {
          P.getPokemonByName(selectedPokemon[0].name).then((response) =>
            setSelectedPokemonData(response)
          )
          console.log(selectedPokemon)
        }
      }

      useEffect(() => {
        getSelectedPokemonData()
      }, [selectedPokemon])
    
    return (
        <div>
            
        </div>
    )
}
