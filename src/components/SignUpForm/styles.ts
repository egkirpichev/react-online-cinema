import { Link } from "react-router-dom";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Color, H2 } from "../../ui";
import { Space } from "../../ui/theme";
import { Body2, Input, Subtitle3 } from "../../ui/typography";

export const StyledForm = styled.form<LayoutProps & SpaceProps>`
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
  align-self: center;
  width: 272px;
  ${layout};
  ${space};
  margin: 90px auto;
  padding: ${Space.S};
  background: ${Color.Dark};
  border-radius: 10px;
`;
export const Title = styled(H2)`
  text-align: left;
  color: ${Color.White};
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

export const StyledInput = styled(Input)``;

export const FieldTitle = styled(Subtitle3)`
  padding-bottom: 8px;
  color: ${Color.White};
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.SMALLEST};
`;

export const Error = styled(Body2)`
  color: ${Color.Error};
`;