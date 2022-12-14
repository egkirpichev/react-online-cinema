import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { StyledLink } from "./styles";

interface IProps {
  text?: string;
  to: ROUTE | `/${ROUTE}`;
  children?: ReactNode;
}

export const CustomLink = ({ text, to, children }: IProps) => {
  const isActive = useMatch(to);

  return (
    <StyledLink to={to} isactive={isActive}>
      {children}
      {text && <span>{text}</span>}
    </StyledLink>
  );
};
