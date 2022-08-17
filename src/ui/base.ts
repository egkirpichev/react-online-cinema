import styled from "styled-components";
import { Breakpoints } from "./breakpoints";
import { Color } from "./colors";
import { Space } from "./spacing";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 306px auto;
  min-height: 100vh;
  max-width: 100vw;
  padding: ${Space.L} ${Space.XXL} ${Space.XXL};
  background-color: ${Color.Black};

  @media (max-width: ${Breakpoints.XL}) {
    padding: ${Space.M} ${Space.XXXL} ${Space.XXL};
  }

  @media (max-width: ${Breakpoints.L}) {
    grid-template-columns: 1fr;
    padding: ${Space.L} ${Space.XXXL} ${Space.XL};
  }

  @media (max-width: ${Breakpoints.M}) {
    grid-template-columns: 1fr;
    padding: ${Space.L} ${Space.L} ${Space.XL};
  }

  @media (max-width: ${Breakpoints.XS}) {
    grid-template-columns: 1fr;
    padding: ${Space.M} ${Space.M} ${Space.L};
  }
`;
