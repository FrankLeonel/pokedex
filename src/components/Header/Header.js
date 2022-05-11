import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import Content from "components/Content";
import Drawer from "components/Drawer";
import SelectTheme from "components/SelectTheme";
import TabNumberFavorites from "components/TabNumberFavorites";
import { usePokemon } from "contexts/PokemonContext";
import useToggle from "hooks/useToggle";
import { AiFillHome } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as S from "./Header.style";
import MenuMain from "./MenuMain";

const Header = () => {
  const { pokemonsFavorite } = usePokemon();

  const [showMenu, onToggleMenu] = useToggle();

  const menuItems = [
    {
      label: "Home",
      icon: <AiFillHome />,
      path: "/",
    },
    {
      label: "Favorites",
      icon: <BsStarFill />,
      path: "/favorites",
      tab: <TabNumberFavorites length={pokemonsFavorite.length} />,
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
            </S.ContainerOptions>
          </S.Section>
        </Content>
      </S.Container>
      <Drawer show={showMenu} items={menuItems} onClose={onToggleMenu} />
    </S.Header>
  );
};

export default Header;
