import { BsFillShareFill, BsFillBookmarkFill } from "react-icons/bs";
import { Container, ControlButton } from "./styles";

export const MovieControl = () => {
  return (
    <Container>
      <ControlButton>
        <BsFillBookmarkFill />
      </ControlButton>
      <ControlButton>
        <BsFillShareFill />
      </ControlButton>
    </Container>
  );
};
