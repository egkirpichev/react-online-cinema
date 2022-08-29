import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { LoadMore, StyledFooter, Text } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter gridColumn={{ XL: "2/3" }}>
      <LoadMore type="button">
        <Text>Load More</Text>
        <CustomSpinner color={Color.White} still={true} size="20px" />
      </LoadMore>
    </StyledFooter>
  );
};
