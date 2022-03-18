import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import Drawer from "components/Drawer";
import { ThemeContext } from "contexts/ThemeContext";
import useToggle from "hooks/useToggle";
import useWindowDimensions from "hooks/useWindowDimension";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { darkTheme, lightTheme } from "utils/themes";
import * as S from "./Header.style";
import MenuMain from "./MenuMain";
import SeachBar from "./SeachBar";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
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
      path: "/details",
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
      <S.Container>
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
              offColor={lightTheme.switchColor}
              onColor={darkTheme.switchColor}
            />

            {width >= 768 ? <SeachBar /> : null}
          </S.ContainerOptions>
        </S.Section>
      </S.Container>
      {width < 768 ? <SeachBar /> : null}
      <Drawer show={showMenu} items={menuItems} onClose={onToggleMenu} />
    </S.Header>
  );
};

export default Header;
