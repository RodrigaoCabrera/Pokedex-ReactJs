import React, { useState } from 'react';
import { usePokemon } from '../../Context/PokemonContext';

const Pokemon = ({ pokemon, key }) => {
    const {  favoritsPokemons, setFavoritsPokemons, pokemones } = usePokemon();

    const redHeart = "❤️";
    const whiteHeart = "♡";

    const typePokemonColor = () => {
        const color = pokemon.types.map((type) => {
            switch (type.type.name) {
                case 'grass':
                    return 'bg-success';
                case 'fire':
                    return 'bg-danger';
                case 'water':
                    return 'bg-primary';
                case 'electric':
                    return 'bg-primary';
                case 'poison':
                    return 'bg-warning';
                case 'flying':
                    return 'bg-info';
                case 'bug':
                    return 'bg-secondary';
                default:
                    return 'bg-white'
            }
        })
        return color;

    }

    const heart = favoritsPokemons.some((p) => p.name === pokemon.name) ? redHeart : whiteHeart;

    const favorits = (namePokemon) => {
        const isFavorit = favoritsPokemons.some((pokemon) => pokemon.name === namePokemon);
        if(!isFavorit){
            const favorit = pokemones.filter((pokemon) => pokemon.name === namePokemon);
            setFavoritsPokemons([...favoritsPokemons, ...favorit]);
        } else {
            const favorit = favoritsPokemons.filter((pokemon) => pokemon.name !== namePokemon);
            setFavoritsPokemons(favorit);
        }
        
        

    };
/*
    const favorits = (namePokemon) => {
        const favorit = [...favoritsPokemons]
        const favoritIndex = favoritsPokemons.indexOf(namePokemon);
        if (favoritIndex >= 0) {
            favorit.splice(favoritIndex, 1);
        } else {
            favorit.push(namePokemon);
        };
        setFavoritsPokemons(favorit);
    };
*/


    return (
        <div className="col-md-4 col-sm-6 col-12 d-flex shadow" key={key}>
            <div className="img-container">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="img-fluid"
                />
            </div>
            <section className="w-100">
                <div className="text-start mt-2">
                    <h5>{pokemon.name}</h5>
                </div>
                <div className="d-flex w-100 justify-content-around">
                    <div className="mx-1 d-flex w-50">
                        <p className={`${typePokemonColor()[0]} px-1 py-1 w-100 rounded-pill`}>{pokemon.types[0].type.name}</p>
                    </div>
                    <div className="mx-1 d-flex w-50">
                        <p className={pokemon.types[1]?.type.name ? `${typePokemonColor()[1]} px-1 py-1 w-100 rounded-pill` : "my-auto bg-secondary rounded-pill"}>{pokemon.types[1]?.type.name}</p>
                    </div>
                    <div>
                        <button className="btn btn-outline" onClick={() => favorits(pokemon.name)}>
                            <div>
                                {

                                    heart

                                }
                            </div>
                        </button>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Pokemon
