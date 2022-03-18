import Item from "./Item";
import * as S from "./Items.style";

const Items = ({ items = [], onClick }) => {
  return (
    <S.Items>
      {items.map((item, index) => (
        <Item key={index} onClick={(e) => onClick(e, item)} {...item} />
      ))}
    </S.Items>
  );
};

export default Items;
