import React from "react";
import PokemonCard from "./components/PokemonGallery";
import pokemonData from "./pokemon/pokemon";

function PokemonGallery() {
  pokemonData.sort();

  return pokemonData.map((element, i) => (
    <div>
      <PokemonCard pokemon={pokemonData[i]} />
    </div>
  ));
}

export default PokemonGallery;
