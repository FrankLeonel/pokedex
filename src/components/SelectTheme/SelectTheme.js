import { ThemeContext } from "contexts/ThemeContext";
import { useContext } from "react";
import { useTheme } from "styled-components";
import * as S from "./SelectTheme.style";

const SelectTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const usedTheme = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <S.SwitchTheme
      id="select"
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
  );
};

export default SelectTheme;
