import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { SpinnerContiner } from "./styles";

export const SearchSpinner = () => {
  return (
    <SpinnerContiner maxWidth={{ XL: "80%" }}>
      <CustomSpinner color={Color.PrimaryDark} />
    </SpinnerContiner>
  );
};
