import Content from "components/Content";
import * as S from "./HeaderDetail.style";

const HeaderDetail = ({ type }) => {
  return (
    <S.HeaderDetailContainer type={type}>
      <Content></Content>
    </S.HeaderDetailContainer>
  );
};

export default HeaderDetail;
