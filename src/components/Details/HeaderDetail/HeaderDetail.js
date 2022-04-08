import Content from "components/Content";
import PokemonType from "components/PokemonType";
import SelectTheme from "components/SelectTheme";
import { useCallback } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { capitalizeHelper } from "utils/capitalize";
import * as S from "./HeaderDetail.style";

const HeaderDetail = ({ pokemon, idVariantyDefault }) => {
  const capitalize = useCallback(capitalizeHelper, []);

  return (
    <S.HeaderDetailContainer type={pokemon.types[0].type.name}>
      <Content>
        <S.Nav>
          <Link to="/" className="icon">
            <FaArrowLeft />
          </Link>
          <SelectTheme />
        </S.Nav>
        <S.Container>
          {idVariantyDefault && idVariantyDefault > 1 ? (
            <Link to={`/details/${idVariantyDefault - 1}`} className="icon">
              <S.ChevronLeft />
            </Link>
          ) : (
            <div />
          )}
          <S.Infos>
            <S.Title>
              <h1>{capitalize(pokemon.name)}</h1>
              <span>#{`000${pokemon.id}`.slice(-3)}</span>
            </S.Title>
            <ul>
              {pokemon.types.map((type) => (
                <PokemonType key={type.slot} type={type.type.name} />
              ))}
            </ul>
          </S.Infos>

          <S.PokemonImage>
            {idVariantyDefault && idVariantyDefault > 1 ? (
              <Link className="icon" to={`/details/${idVariantyDefault - 1}`}>
                <S.ChevronLeft />
              </Link>
            ) : (
              <div />
            )}
            <S.ContainerImages>
              <S.ImgPokemon
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt="Arte Pokémon"
              />
            </S.ContainerImages>
            {idVariantyDefault && idVariantyDefault < 898 ? (
              <Link className="icon" to={`/details/${idVariantyDefault + 1}`}>
                <S.ChevronRight />
              </Link>
            ) : (
              <div />
            )}
          </S.PokemonImage>
          {idVariantyDefault && idVariantyDefault < 898 ? (
            <Link className="icon" to={`/details/${idVariantyDefault + 1}`}>
              <S.ChevronRight />
            </Link>
          ) : (
            <div />
          )}
        </S.Container>
      </Content>
    </S.HeaderDetailContainer>
  );
};

export default HeaderDetail;
