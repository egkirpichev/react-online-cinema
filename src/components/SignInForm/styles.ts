import { Link } from "react-router-dom";
import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";
import { Color, H2 } from "../../ui";
import { Space } from "../../ui/theme";
import { Body2, Input, Subtitle3 } from "../../ui/typography";

export const StyledForm = styled.form<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
  align-self: center;
  width: 272px;
  ${layout};
  padding: ${Space.L};
  background: ${Color.Dark};
  border-radius: 10px;
`;
export const Title = styled(H2)`
  text-align: left;
  color: ${Color.White};
`;

export const ResetPassword = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: ${Color.Secondary};
  :hover {
    color: ${Color.PrimaryDark};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.XS};
`;

export const SignUp = styled(Body2)`
  display: flex;
  justify-content: center;
  color: ${Color.Secondary};
`;

export const SignUpLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: ${Color.PrimaryLight};
  :hover {
    color: ${Color.PrimaryDark};
  }
`;

export const EmailInput = styled(Input)``;

export const PasswordInput = styled(Input)``;

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
