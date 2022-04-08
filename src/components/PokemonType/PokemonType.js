import { useCallback } from "react";
import { capitalizeHelper } from "utils/capitalize";
import * as S from "./PokemonType.style";

const PokemonType = ({ type }) => {
  const capitalize = useCallback(capitalizeHelper, []);
  return <S.Type type={type}>{capitalize(type)}</S.Type>;
};

export default PokemonType;
