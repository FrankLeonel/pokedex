import * as S from "./PokemonCard.style";

const PokemonCard = ({ name }) => {
  return (
    <>
      <S.TextName>{name}</S.TextName>
    </>
  );
};

export default PokemonCard;
