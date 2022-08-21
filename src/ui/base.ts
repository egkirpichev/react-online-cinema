import styled from "styled-components";
import { Breakpoint } from "./breakpoints";
import { Color } from "./colors";
import { Space } from "./spacing";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 306px auto;
  min-height: 100vh;
  max-width: 100vw;
  padding: ${Space.L} ${Space.XXL} ${Space.XXL};
  background-color: ${Color.Black};

  @media (max-width: ${Breakpoint.XL}) {
    padding: ${Space.M} ${Space.XXXL} ${Space.XXL};
  }

  @media (max-width: ${Breakpoint.L}) {
    grid-template-columns: 1fr;
    padding: ${Space.L} ${Space.XXXL} ${Space.XL};
  }

  @media (max-width: ${Breakpoint.M}) {
    grid-template-columns: 1fr;
    padding: ${Space.L} ${Space.L} ${Space.XL};
  }

  @media (max-width: ${Breakpoint.XS}) {
    grid-template-columns: 1fr;
    padding: ${Space.M} ${Space.M} ${Space.L};
  }
`;
