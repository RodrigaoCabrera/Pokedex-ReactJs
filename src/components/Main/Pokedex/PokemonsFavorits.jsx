import React from "react";
import { usePokemon } from "../../Context/PokemonContext";

const PokemonsFavorits = () => {
  const {
    favoritsPokemons,
    setIsViewFavorits,
    typePokemonColor,
    favorits,
    heart,
  } = usePokemon();

  return (
    <div
      className="container p-3 rounded bg-secondary position-absolute d-flex flex-column mt-5 overflow-auto shadow"
      style={{ height: "80vh" }}
    >
      <section className="mb-4 d-flex justify-content-center">
        <span
          onClick={() => {
            setIsViewFavorits(false);
          }}
          className="bg-danger text-white shadow border border-1 rounded-circle p-2 px-3 cursor-pointer"
          style={{ cursor: "pointer" }}
        >
          X
        </span>
      </section>
      <div className="container h-100 ">
        <div className="row d-flex">
          {favoritsPokemons.length !== 0 ? (
            favoritsPokemons.map((pokemon) => {
              return (
                <div
                  className="col-md-4 col-sm-6 col-xm-12 d-flex shadow"
                  key={pokemon.name}
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
            })
          ) : (
            <div className="col-12 mt-5 text-warning h4 text-center">
              No has seleccionado ningun pokemón favorito.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonsFavorits;
