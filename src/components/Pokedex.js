import React from 'react'

export const Pokedex = () => {
    return (
        <div className="pokedex">
            <h2>Pokédex</h2>
            <div className="pokedex-list">
                <div className="pokemon">
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} className="sprite" />
                    <h3 className="pokemon-name">Pokemon name</h3>
                    <button className="remove">&times;</button>
                </div>
            </div>
        </div>
    )
}
