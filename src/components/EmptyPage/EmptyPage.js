import pokemonSplash from "assets/images/pokemon.json";
import Lottie from "lottie-react-web";
import * as S from "./EmptyPage.style";

const EmptyPage = ({ title, subtitle }) => {
  return (
    <S.EmptyPageContainer>
      <Lottie
        options={{
          animationData: pokemonSplash,
          autoplay: true,
          loop: true,
        }}
        height={300}
        width={300}
        ariaLabel="animation"
        title="Pokemon with glasses"
      />

      <S.Main>
        <S.Title>{title}</S.Title>

        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Main>
    </S.EmptyPageContainer>
  );
};

export default EmptyPage;
