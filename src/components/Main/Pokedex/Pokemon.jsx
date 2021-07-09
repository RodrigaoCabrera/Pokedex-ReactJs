import React from "react";
import { usePokemon } from "../../Context/PokemonContext";

const Pokemon = ({ pokemon, key }) => {
  const { typePokemonColor, favorits, heart } = usePokemon();

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
    <div
      className="col-md-4 col-sm-6 col-12 d-flex shadow bg-white rounded"
      key={key}
    >
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
            <p
              className={`${
                typePokemonColor(pokemon)[0]
              } px-1 py-1 w-100 rounded-pill text-center`}
            >
              {pokemon.types[0].type.name}
            </p>
          </div>
          <div className="mx-1 d-flex w-50">
            <p
              className={
                pokemon.types[1]?.type.name
                  ? `${
                      typePokemonColor(pokemon)[1]
                    } px-1 py-1 w-100 rounded-pill text-center`
                  : "my-auto bg-secondary rounded-pill text-center"
              }
            >
              {pokemon.types[1]?.type.name}
            </p>
          </div>
          <div>
            <button
              className="btn btn-outline"
              onClick={() => favorits(pokemon.name)}
            >
              <div>{heart(pokemon.name)}</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pokemon;
