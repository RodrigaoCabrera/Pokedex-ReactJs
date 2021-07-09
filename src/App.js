import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Header/Navbar';
import SearchBar from './components/Main/SearchBar';
import Pokedex from './components/Main/Pokedex/Pokedex';
import { PokemonProvider, usePokemon } from './components/Context/PokemonContext';
import PokemonsFavorits from './components/Main/Pokedex/PokemonsFavorits';

export default () => <PokemonProvider><App></App></PokemonProvider>

function App() {


  const { page,
    pokemones,
    setPokemones,
    ObtenerPokemones,
    notFound,
    setNotFound,
    isSearching,
    setIsSearching,
    isViewFavorits } = usePokemon();


  useEffect(() => {
    ObtenerPokemones();
  }, [page]);

  const searchPokemon = async (pokemon) => {
    setIsSearching(true);

    if (pokemon) {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const response = await fetch(url + pokemon);
      if (response.ok) {
        const data = await response.json();
        setPokemones([data]);
        setIsSearching(false)
      } else {
        setNotFound(true);
        setIsSearching(false);
      }
    } else {
      ObtenerPokemones();
    }
  }

  return (
    isViewFavorits ?
      <div className="d-flex justify-content-center items-content-center lead">
        <PokemonsFavorits />
      </div>
      :

      <div className="lead">
        <Navbar />
        <SearchBar searchPokemon={searchPokemon} />
        {
          notFound ?
            <div className="text-warning p-5 h4">No se encontraron resultados</div>
            :
            <Pokedex pokemones={pokemones} isSearching={isSearching} />
        }

      </div>

  );
};
