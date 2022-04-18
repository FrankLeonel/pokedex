import ContainerPokemon from "components/ContainerPokemon";
import { usePokemon } from "contexts/PokemonContext";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { capitalizeHelper } from "utils/capitalize";
import * as S from "./PokemonEvolution.style";

const PokemonEvolution = ({ evolutionChain }) => {
  const { getPokemonImage } = usePokemon();

  const handleEvolves = useCallback(
    (chains) => {
      if (chains.length) {
        return (
          <>
            <S.Stage className={`evolves${chains.length}`}>
              {chains.map((evolve) => (
                <Link
                  to={`/details/${evolve.species.url.slice(42, -1)}`}
                  key={evolve.species.name}
                >
                  <S.Evolution>
                    <S.Image
                      src={getPokemonImage(evolve.species.url.slice(42, -1))}
                      alt={evolve.species.name}
                    />
                    <S.Name>
                      <h3>{capitalizeHelper(evolve.species.name)}</h3>
                      <span>
                        #{`000${evolve.species.url.slice(42, -1)}`.slice(-3)}
                      </span>
                    </S.Name>
                  </S.Evolution>
                </Link>
              ))}
            </S.Stage>
            {!!chains[0].evolves_to.length && <S.ChevronRight />}
            {chains.map((evolve) => handleEvolves(evolve.evolves_to))}
          </>
        );
      }
      return <></>;
    },
    [getPokemonImage]
  );

  const handleFirstStage = useCallback(
    (chain) => {
      return (
        <ContainerPokemon>
          <S.Title>Evolution</S.Title>
          <S.EvoluationsWrap>
            <S.Stage className="firstStage">
              <Link to={`/details/${chain.species.url.slice(42, -1)}`}>
                <S.Evolution>
                  <S.Image
                    src={getPokemonImage(chain.species.url.slice(42, -1))}
                    alt={chain.species.name}
                  />
                  <S.Name>
                    <h3>{capitalizeHelper(chain.species.name)}</h3>
                    <span>
                      #{`000${chain.species.url.slice(42, -1)}`.slice(-3)}
                    </span>
                  </S.Name>
                </S.Evolution>
              </Link>
            </S.Stage>
            {!!chain.evolves_to.length && <S.ChevronRight />}
            {handleEvolves(chain.evolves_to)}
          </S.EvoluationsWrap>
        </ContainerPokemon>
      );
    },
    [handleEvolves, getPokemonImage]
  );

  return handleFirstStage(evolutionChain.chain);
};

export default PokemonEvolution;
