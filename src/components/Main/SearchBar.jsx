import React, { useState } from "react";

const SearchBar = ({ searchPokemon }) => {
  const [pokemon, setPokemon] = useState();
  
  const inputPokemons = (e) => {
    if (e.target.value.length === 0) {
      searchPokemon(null);
      setPokemon();
    } else {
      setPokemon(e.target.value.toLowerCase());
    }
  };

  const search = () => {
    searchPokemon(pokemon);
  };

  return (
    <div className="container justify-content-center mt-2">
      <section className="row d-flex">
        <div className="col-md-7 offset-md-2 col-sm-12">
          <label
            htmlFor="searchBar"
            className="gb-dark d-flex align-content-end border-0 mb-sm-2"
            style={{ height: "2.5rem" }}
          >
            <input
              className="shadow border border-light rounded-pill p-2 w-100 "
              style={{ outline: "none" }}
              type="text"
              placeholder="Buscar pokemones"
              onChange={inputPokemons}
            />
          </label>
        </div>

        <div className="col-md-2 col-sm-12 ">
          <section style={{ height: "2.5rem" }}>
            {pokemon ? (
              <button
                className="btn btn-dark rounded-circle h-100"
                onClick={search}
              >
                Buscar
              </button>
            ) : (
              <button
                className="btn btn-dark rounded-circle h-100"
                onClick={search}
                disabled
              >
                Buscar
              </button>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
