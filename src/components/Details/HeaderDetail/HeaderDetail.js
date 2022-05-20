import imgPokeball from "assets/icons/pokeball.svg";
import Content from "components/Content";
import PokemonType from "components/PokemonType";
import SelectTheme from "components/SelectTheme";
import { usePokemon } from "contexts/PokemonContext";
import React, { useCallback } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { capitalizeHelper } from "utils/capitalize";
import colorType from "utils/colorType";
import * as S from "./HeaderDetail.style";

const HeaderDetail = ({ pokemon, idVariantyDefault, onClickFavorites }) => {
  const capitalize = useCallback(capitalizeHelper, []);

  const { pokemonsFavorite } = usePokemon();

  const finalColor = colorType(
    pokemon.types[0].type.name,
    pokemon.types[1]?.type.name,
    pokemon.types.length
  );

  return (
    <S.HeaderDetailContainer
      type1={finalColor.color1}
      type2={finalColor.color2}
    >
      <Content>
        <S.Nav>
          <Link to="/" className="icon">
            <FaArrowLeft />
          </Link>
          <S.ContainerRight>
            {pokemonsFavorite &&
            pokemonsFavorite.some((item) => item.name === pokemon.name) ? (
              <S.FavoriteView onClick={onClickFavorites}>
                <S.IconFavorite />
                <p>Remove</p>
              </S.FavoriteView>
            ) : (
              <S.FavoriteView onClick={onClickFavorites}>
                <S.IconNoFavorite />
                <p>Add</p>
              </S.FavoriteView>
            )}
            <SelectTheme />
          </S.ContainerRight>
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
              {pokemon.sprites.other["official-artwork"].front_default ? (
                <S.Image
                  alt="image-pokemon"
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  visibleByDefault={false}
                  delayMethod={"debounce"}
                  width={220}
                  height={220}
                />
              ) : (
                <S.Image
                  alt="image-pokemon"
                  src={imgPokeball}
                  visibleByDefault={false}
                  delayMethod={"debounce"}
                  width={220}
                  height={220}
                />
              )}
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
