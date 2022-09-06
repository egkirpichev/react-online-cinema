import { Link } from "react-router-dom";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Color, H2 } from "../../ui";
import { Space } from "../../ui/theme";
import { Body2, Input, Subtitle3 } from "../../ui/typography";

interface IProps {
  isLightMode: boolean;
}

export const StyledForm = styled.form<LayoutProps & SpaceProps & IProps>`
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
  align-self: center;
  width: 272px;
  ${layout};
  ${space};
  margin: 90px auto;
  padding: ${Space.S};
  background: ${({ isLightMode }) => (isLightMode ? Color.White : Color.Dark)};
  border-radius: 10px;
`;
export const Title = styled(H2)<IProps>`
  text-align: left;
  color: ${({ isLightMode }) => (isLightMode ? Color.Dark : Color.White)};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.XS};
`;

export const SignIn = styled(Body2)`
  display: flex;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.Secondary};
`;

export const SignInLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: ${Color.PrimaryLight};
  :hover {
    color: ${Color.PrimaryDark};
  }
`;

export const StyledInput = styled(Input)<IProps>`
  background-color: ${({ isLightMode }) =>
    isLightMode ? Color.White : Color.Dark};
  border-color: ${({ isLightMode }) =>
    isLightMode ? Color.Secondary : Color.Black};
`;

export const FieldTitle = styled(Subtitle3)<IProps>`
  padding-bottom: 8px;
  color: ${({ isLightMode }) => (isLightMode ? Color.Dark : Color.White)};
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.SMALLEST};
`;
