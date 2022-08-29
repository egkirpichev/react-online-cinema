import { useMatch } from "react-router-dom";
import { Endpoint } from "../../router";
import { StyledLink } from "./styles";

interface IProps {
  text: string;
  to: Endpoint;
  icon: string;
}

export const CustomLink = ({ text, to, icon }: IProps) => {
  const isActive = useMatch(to);

  return (
    <StyledLink to={to} isactive={isActive}>
      <img src={icon} />
      <span>{text}</span>
    </StyledLink>
  );
};
