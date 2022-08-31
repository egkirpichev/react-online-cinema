import styled from "styled-components";
import { Color } from "./colors";
import { Space } from "./theme";

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  color: ${Color.Graphite};
`;

export const H2 = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${Color.Graphite};
`;

export const H3 = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: ${Color.Graphite};
`;

export const Subtitle1 = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${Color.Graphite};
`;

export const Subtitle2 = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Graphite};
`;

export const Subtitle3 = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Graphite};
`;

export const Body1 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Light};
`;

export const Body2 = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Light};
`;

export const ButtonPrimary = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.White};
  background-color: ${Color.PrimaryDark};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: ${Color.PrimaryLight};
  }

  :active {
    box-shadow: inset 5px 5px 5px ${Color.Black};
  }
`;

export const ButtonSecondary = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.White};
  background-color: ${Color.Graphite};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    color: ${Color.Light};
  }

  :active {
    box-shadow: inset 5px 5px 5px ${Color.Black};
  }
`;
