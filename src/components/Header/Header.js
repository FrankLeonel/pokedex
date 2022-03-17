import { TertiaryButton } from "components/Buttons/Buttons.style";
import { ThemeContext } from "contexts/ThemeContext";
import { useContext } from "react";
import Switch from "react-switch";
import { darkTheme, lightTheme } from "utils/themes";
import * as S from "./Header.style";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <S.Container>
      <a href="/">
        <S.Logo />
      </a>

      <S.ContainerOptions>
        <TertiaryButton>Favoritos</TertiaryButton>

        <Switch
          onChange={toggleTheme}
          checked={theme === "dark"}
          checkedIcon={<S.IconMoon size={20} />}
          uncheckedIcon={<S.IconSun size={20} />}
          height={28}
          width={56}
          handleDiameter={22}
          offColor={lightTheme.switchColor}
          onColor={darkTheme.switchColor}
        />
      </S.ContainerOptions>
    </S.Container>
  );
};

export default Header;
