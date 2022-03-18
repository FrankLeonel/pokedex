import { ReactComponent as CrossIcon } from "assets/icons/cross-icon.svg";
import * as S from "./NavigationBar.style";

const NavigationBar = ({ title = "Menu", onClose }) => {
  return (
    <S.Bar>
      <S.NavigationItem>{title}</S.NavigationItem>
      <S.ClosedIcon onClick={onClose}>
        <CrossIcon />
      </S.ClosedIcon>
    </S.Bar>
  );
};

export default NavigationBar;
