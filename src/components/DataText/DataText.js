import * as S from "./DataText.style";

const DataText = ({ title, children }) => {
  return (
    <S.DataTextContainer>
      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
      </S.ContainerTitle>

      <S.Description>{children}</S.Description>
    </S.DataTextContainer>
  );
};

export default DataText;
