import React, { useState, useMemo } from 'react';

const PokemonContext = React.createContext();

export function PokemonProvider(props) {
    const [pokemones, setPokemones] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [favoritsPokemons, setFavoritsPokemons] = useState([]);
    const [isViewFavorits, setIsViewFavorits] = useState(false);

    const typePokemonColor = (pokemon) => {
        const color = pokemon.types.map((type) => {
            switch (type.type.name) {
                case "grass":
                    return "bg-success";
                case "fire":
                    return "bg-danger";
                case "water":
                    return "bg-primary";
                case "electric":
                    return "bg-primary";
                case "poison":
                    return "bg-warning";
                case "flying":
                    return "bg-info";
                case "bug":
                    return "bg-secondary";
                default:
                    return "bg-white";
            }
        });
        return color;
    };

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

    const favorits = (namePokemon) => {
        const isFavorit = favoritsPokemons.some(
            (pokemon) => pokemon.name === namePokemon
        );
        if (!isFavorit) {
            const favorit = pokemones.filter(
                (pokemon) => pokemon.name === namePokemon
            );
            setFavoritsPokemons([...favoritsPokemons, ...favorit]);
        } else {
            const favorit = favoritsPokemons.filter(
                (pokemon) => pokemon.name !== namePokemon
            );
            setFavoritsPokemons(favorit);
        }
    };

    const redHeart = "❤️";
    const whiteHeart = "♡";


    const heart = (Pokename) => {
        return (
            favoritsPokemons.some((p) => p.name === Pokename)
                ? redHeart
                : whiteHeart
        )
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
            setIsViewFavorits,
            typePokemonColor,
            favorits,
            heart
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