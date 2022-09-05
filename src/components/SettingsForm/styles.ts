import styled from "styled-components";
import {
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { Color, H2 } from "../../ui";
import { Space } from "../../ui/theme";
import {
  Body2,
  ButtonPrimary,
  ButtonSecondary,
  Input,
  Subtitle3,
} from "../../ui/typography";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Space.M};
  width: 100%;
  max-width: 1165px;
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

export const Body = styled.div<JustifyContentProps & AlignItemsProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${Space.XS};
  justify-content: space-between;
  justify-items: end;
  ${justifyContent};
  ${alignItems}
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

export const InputField = styled.div<LayoutProps & SpaceProps>`
  display: flex;
  flex-direction: column;
  gap: ${Space.SMALLEST};
  width: 100%;
  ${layout}
  ${space}
`;

export const Control = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 500px;
`;

export const Cancel = styled(ButtonSecondary)``;
export const Save = styled(ButtonPrimary)``;

export const FieldDescription = styled(Body2)``;