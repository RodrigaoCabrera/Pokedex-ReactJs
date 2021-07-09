import React, { useState, useReducer, useMemo } from 'react';
import PokemonReducer from './PokemonReducer'

const PokemonContext = React.createContext();

export function PokemonProvider(props) {
    const [pokemones, setPokemones] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [favoritsPokemons, setFavoritsPokemons] = useState([]);
    const [isViewFavorits, setIsViewFavorits] = useState(false);

    const ObtenerPokemones = async () => {
        setNotFound(false);
        setIsSearching(true)
        const dataPokemones = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=18&offset=${18 * page}`);
        const data = await dataPokemones.json();
        setTotalPage(Math.ceil(data.count / 18))

        const allPokemones = data?.results.map(async (pokemon) => {
            const urlPokemones = await fetch(pokemon.url);
            const pokemonsData = await urlPokemones.json();
            return pokemonsData;
        })
        const results = await Promise.all(allPokemones);
        setPokemones(results);
        setIsSearching(false);

    };

   

    const value = useMemo(() => {
        return ({
            pokemones,
            setPokemones,
            ObtenerPokemones,
            notFound,
            setNotFound,
            isSearching,
            setIsSearching,
            page,
            setPage,
            totalPage,
            setTotalPage,
            favoritsPokemons,
            setFavoritsPokemons,
            isViewFavorits,
            setIsViewFavorits
        })
    }, [page, totalPage, isSearching, notFound, favoritsPokemons, isViewFavorits]);

    

    return (
        <PokemonContext.Provider value={value} {...props}
        />
    )
};

export function usePokemon() {
    const context = React.useContext(PokemonContext);
    if (!context) {
        console.log('Erroooor')
    }
    return context;
}