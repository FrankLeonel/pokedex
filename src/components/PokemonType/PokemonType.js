import { useCallback } from "react";
import { capitalize } from "utils/capitalize";
import * as S from "./PokemonType.style";

const PokemonType = ({ type }) => {
  const capitalizeHelper = useCallback(capitalize, []);
  return <S.Type type={type}>{capitalizeHelper(type)}</S.Type>;
};

export default PokemonType;
