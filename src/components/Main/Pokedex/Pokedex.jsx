import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

import Loading from "../../Loading/Loading";

const Pokedex = ({ pokemones, isSearching }) => {
  return (
    <div className="bg-primary w-100">
      <Pagination />

      {isSearching ? (
        <Loading />
      ) : (
        <div>
          <section className="container rounded">
            <div className="row">
              {pokemones?.map((pokemon) => {
                return <Pokemon pokemon={pokemon} key={pokemon.name} />;
              })}
            </div>
          </section>
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default Pokedex;
