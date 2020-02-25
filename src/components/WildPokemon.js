import React from 'react'

export const WildPokemon = () => {
    return (
        <div className="wild-pokemon">
            <h2>Wild Encounter</h2>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png" className="sprite" />
            <h3>Pokemon name</h3>
            <button className="catch-btn">CATCH</button>
        </div>
    )
}
