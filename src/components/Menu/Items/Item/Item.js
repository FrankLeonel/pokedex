import Divider from "components/Divider";
import * as S from "./Item.style";

const Item = ({ label, icon, path, tab, onClick }) => {
  return (
    <S.Item>
      <S.Link to={path} onClick={onClick} end>
        <S.Section>
          {icon && <S.Icon>{icon}</S.Icon>}
          {label}
          {tab && <S.DivTab>{tab}</S.DivTab>}
        </S.Section>
      </S.Link>
      <Divider />
    </S.Item>
  );
};

export default Item;
