import React from "react";
import { usePokemon } from "../Context/PokemonContext";

const Navbar = () => {
  const { favoritsPokemons, setIsViewFavorits } = usePokemon();

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  const viewFavorits = () => {
    setIsViewFavorits(true);
  };

  return (
    <nav className="h-25 pt-2">
      <section className="h-25 d-flex bg-primary justify-content-around">
        <div></div>
        <div className="" style={{ height: "50px" }}>
          <img className="h-100" src={imgUrl} alt="" />
        </div>
        <div
          className="align-self-center"
          onClick={viewFavorits}
          style={{ cursor: "pointer" }}
        >
          &#10084;&#65039; {favoritsPokemons.length}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
