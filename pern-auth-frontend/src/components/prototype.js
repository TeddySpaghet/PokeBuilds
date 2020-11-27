import React from 'react'

// for a single pokemon

const PokeContainer = () => {
    // state logic
    // selectedPokemon
    // setMoves
    // setStats
    return (
        <div>
        {/* if logic to hide move/stats containers */}
        <h1>{name}</h1>
        <img src={image} alt=""/>
        <Button>{single page link}</Button>
        <PokemonChooser pokemon={pokemon}/>
        <MoveContainer moves={moves}/>
        <StatContainer stats={stats}/>

            
        </div>
    )
}

export default PokeContainer
