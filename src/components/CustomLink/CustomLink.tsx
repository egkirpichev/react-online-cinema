import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { Endpoint } from "../../router";
import { StyledLink } from "./styles";

interface IProps {
  text: string;
  to: Endpoint;
  children: ReactNode;
}

export const CustomLink = ({ text, to, children }: IProps) => {
  const isActive = useMatch(to);

  return (
    <StyledLink to={to} isactive={isActive}>
      {children}
      <span>{text}</span>
    </StyledLink>
  );
};
