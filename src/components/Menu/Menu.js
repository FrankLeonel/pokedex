import React, { useState } from "react";
import Items from "./Items";
import * as S from "./Menu.style";
import NavigationBar from "./NavigationBar";

function Menu({ title, items, onClose }) {
  const initialState = {
    label: title,
    direction: "",
    items: items,
  };
  const [currentPage, setCurrentPage] = useState(initialState);

  const onClickItem = (e, item) => {
    const hasSubItems = item && item?.subitems?.length > 0;

    if (hasSubItems) {
      e.preventDefault();
      setCurrentPage({
        direction: "forward",
        label: item?.label,
        items: item?.subitems,
      });
      return;
    }

    onClose();
  };

  return (
    <S.Container>
      <NavigationBar title={currentPage?.label} onClose={onClose} />
      <S.Menu className={currentPage.direction}>
        <Items items={currentPage.items} onClick={onClickItem} />
      </S.Menu>
    </S.Container>
  );
}

export default Menu;
