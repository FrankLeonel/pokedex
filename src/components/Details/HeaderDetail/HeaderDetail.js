import Content from "components/Content";
import SelectTheme from "components/SelectTheme";
import { Link } from "react-router-dom";
import * as S from "./HeaderDetail.style";

const HeaderDetail = ({ type }) => {
  return (
    <S.HeaderDetailContainer type={type}>
      <Content>
        <S.Container>
          <Link to="/">
            <S.ArrowLeft />
          </Link>
          <SelectTheme />
        </S.Container>
      </Content>
    </S.HeaderDetailContainer>
  );
};

export default HeaderDetail;
