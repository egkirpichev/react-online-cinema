import { Link, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color, Space } from "ui";

interface IProps {
  isactive: PathMatch<string> | null;
}

export const StyledLink = styled(Link)<IProps>`
  display: flex;
  align-items: center;
  gap: ${Space.S};
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => (props.isactive ? Color.PrimaryDark : Color.Secondary)};
  text-decoration: none;

  :hover {
    color: ${Color.PrimaryLight};
  }
`;
