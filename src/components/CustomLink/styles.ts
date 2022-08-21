import { Link, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui";
import { Space } from "../../ui/spacing";

interface IProps {
  isActive: PathMatch<string> | null;
}

export const StyledLink = styled(Link)<IProps>`
  display: flex;
  gap: ${Space.S};
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => (props.isActive ? Color.PrimaryDark : Color.Secondary)};
  text-decoration: none;

  :hover {
    color: ${Color.PrimaryLight};
  }
`;
