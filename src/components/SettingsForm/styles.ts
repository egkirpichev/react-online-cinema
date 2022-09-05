import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Color, H2 } from "../../ui";
import { Space } from "../../ui/theme";
import {
  ButtonPrimary,
  ButtonSecondary,
  Input,
  Subtitle3,
} from "../../ui/typography";

export const StyledForm = styled.form<LayoutProps & SpaceProps>`
  display: flex;
  flex-direction: column;
  gap: ${Space.M};
  width: 100%;
  ${layout};
  ${space};
  border-radius: 10px;
`;

export const Title = styled(H2)`
  text-align: left;
  color: ${Color.White};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Space.XS};
  width: 100%;
  padding: ${Space.S};
  background: ${Color.Dark};
  border-radius: 10px;
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
  width: 100%;
  min-width: 234px;
`;

export const Control = styled.div`
  display: flex;
  gap: 16px;
`;

export const Cancel = styled(ButtonSecondary)``;
export const Save = styled(ButtonPrimary)``;
