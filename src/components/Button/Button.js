import * as S from "./Button.style";
const Button = ({ children, onClick, ...props }) => (
  <S.Button onClick={onClick} {...props}>
    {children}
  </S.Button>
);

export default Button;
