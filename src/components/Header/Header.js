import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import Content from "components/Content";
import Drawer from "components/Drawer";
import { ThemeContext } from "contexts/ThemeContext";
import useToggle from "hooks/useToggle";
import useWindowDimensions from "hooks/useWindowDimension";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import * as S from "./Header.style";
import MenuMain from "./MenuMain";
import SeachBar from "./SeachBar";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const usedTheme = useTheme();
  // const { pokemons } = usePokemons();
  // const lengthFavorites = pokemons.length;

  const { width } = useWindowDimensions();

  const [showMenu, onToggleMenu] = useToggle();
  const menuItems = [
    {
      label: "Página inicial",
      path: "/",
    },
    {
      label: "Favoritos",
      path: "/favoritos",
    },
  ];

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <S.Header>
      <Content>
        <S.Section>
          <S.Wrapper>
            <S.MenuBurger onClick={onToggleMenu}>
              <MenuIcon />
            </S.MenuBurger>
            <Link to="/">
              <S.Logo />
            </Link>
            <MenuMain items={menuItems} />
          </S.Wrapper>

          <S.ContainerOptions>
            <S.SwitchTheme
              onChange={toggleTheme}
              checked={theme === "dark"}
              checkedIcon={<S.IconMoon size={20} />}
              uncheckedIcon={<S.IconSun size={20} />}
              height={28}
              width={56}
              handleDiameter={22}
              offColor={usedTheme.switchColor}
              onColor={usedTheme.switchColor}
            />

            {width >= 768 ? <SeachBar /> : null}
          </S.ContainerOptions>
        </S.Section>
      </Content>
      {width < 768 ? <SeachBar /> : null}
      <Drawer show={showMenu} items={menuItems} onClose={onToggleMenu} />
    </S.Header>
  );
};

export default Header;
