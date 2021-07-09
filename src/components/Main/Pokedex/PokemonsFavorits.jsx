import React from 'react';
import { usePokemon } from '../../Context/PokemonContext';

const PokemonsFavorits = () => {
    const {  favoritsPokemons } = usePokemon();

    return (
        <div className="container p-3 rounded bg-secondary position-absolute d-flex align-self-center mt-5" style={{height:"80vh"}}>
        <div className="container">
            <div className="row position-relative" >
                {
                favoritsPokemons?.map((pokemon) => {
                    return (
                        
                                <div className="col-md-4 col-sm-6 col-12 d-flex shadow" key={pokemon.name}>
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
                                                <p className="px-1 py-1 w-100 rounded-pill">{pokemon.types[0].type.name}</p>
                                            </div>
                                            <div className="mx-1 d-flex w-50">
                                                <p className="px-1 py-1 w-100 rounded-pill my-auto bg-secondary rounded-pill">{pokemon.types[1]?.type.name}</p>
                                            </div>
                                            <div>
                                                <button className="btn btn-outline" >
                                                    <div>
                                                        
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                    </section>
                                </div>
                        
                    )
                }) 
                }
            </div>
        </div>
        </div>
    )
}

export default PokemonsFavorits
