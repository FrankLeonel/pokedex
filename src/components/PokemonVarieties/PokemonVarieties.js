import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { capitalizeHelper, capitalizeTinyHelper } from "utils/capitalize";
import * as S from "./PokemonVarieties.style";

const PokemonVarieties = ({ varieties, selected }) => {
  const capitalize = useCallback(capitalizeHelper, []);
  const capitalizeTiny = useCallback(capitalizeTinyHelper, []);

  const navigate = useNavigate();

  function handleChange(value) {
    navigate(`/details/${capitalizeTiny(value)}`);
  }

  return (
    <S.Select
      onChange={(event) => handleChange(event.target.value)}
      value={selected}
    >
      {varieties.map((variety) => (
        <S.Option key={variety.pokemon.name} value={variety.pokemon.name}>
          {capitalize(variety.pokemon.name)}
        </S.Option>
      ))}
    </S.Select>
  );
};

export default PokemonVarieties;
