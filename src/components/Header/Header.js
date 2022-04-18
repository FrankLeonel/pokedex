import { ReactComponent as FilterIcon } from "assets/icons/filter-icon.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import Content from "components/Content";
import Drawer from "components/Drawer";
import SelectTheme from "components/SelectTheme";
import useToggle from "hooks/useToggle";
import useWindowDimensions from "hooks/useWindowDimension";
import { Link } from "react-router-dom";
import * as S from "./Header.style";
import MenuMain from "./MenuMain";
import SeachBar from "./SeachBar";

const Header = () => {
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

  return (
    <S.Header>
      <S.Container>
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
              <SelectTheme />

              {width >= 768 ? <SeachBar /> : null}

              {width >= 768 ? (
                <S.FilterButton>
                  <FilterIcon />
                </S.FilterButton>
              ) : null}
            </S.ContainerOptions>
          </S.Section>
        </Content>
      </S.Container>
      {width < 768 ? <SeachBar /> : null}
      <Drawer show={showMenu} items={menuItems} onClose={onToggleMenu} />
    </S.Header>
  );
};

export default Header;
