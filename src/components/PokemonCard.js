import React from "react";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;

  return (
    <div className="pokeCard">
      <div>
        <img
          className="pokeImage"
          src={process.env.PUBLIC_URL + "/pokemonImage/" + id + ".png"}
          alt=""
        />
      </div>
      <div className="pokeName">{name.english}</div>
      <br></br>
      <div className="box-types ">
        {type.map((element) => (
          <span className={element}>{element}</span>
        ))}
      </div>
      <br></br>
      <div>HP: {base.HP}</div>
      <div>Attack: {base.Attack}</div>
      <div>Defence: {base.Defence}</div>
      <div>SpAttack: {base.SpAttack}</div>
      <div>SpDefence: {base.SpDefence}</div>
      <div>Speed: {base.Speed}</div>
    </div>
  );
}

export default PokemonCard;
