import Menu from "components/Menu";
import React, { useEffect } from "react";
import BackDrop from "./BackDrop";
import * as S from "./Drawer.style";

const Drawer = ({ show, title, direction = "left", items = [], onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = show ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [show]);

  return (
    <>
      <BackDrop show={show} onClick={onClose} />
      <S.Drawer show={show} className={direction}>
        <Menu title={title} items={items} onClose={onClose} />
      </S.Drawer>
    </>
  );
};

export default Drawer;
