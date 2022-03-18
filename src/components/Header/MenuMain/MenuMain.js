import Divider from "components/Divider";
import * as S from "./MenuMain.style";

const MenuMain = ({ items = [] }) => {
  return (
    <S.Items>
      {items.map((item) => (
        <S.Item key={item.label}>
          <S.Link to={item.path} onClick={item?.onClick} end>
            {item.label}
          </S.Link>
          <Divider />
        </S.Item>
      ))}
    </S.Items>
  );
};

export default MenuMain;
