import { useAppSelector, useToggle } from "../../hooks";
import {
  ArrowIcon,
  Avatar,
  ArrowButton,
  DropDownContainer,
  Header,
  Button,
  UserBadge,
} from "./styles";
import { FiUser } from "react-icons/fi";
import { getShortUserName } from "../../utils/utils";
import { CustomLink } from "../CustomLink";
import { ROUTE } from "../../router";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const { isLogged, name } = useAppSelector((userSlice) => userSlice.user);
  const [isOpen, setIsOpen] = useToggle();
  const navigate = useNavigate();
  console.log(isLogged);

  return (
    <UserBadge>
      <Avatar>{name ? getShortUserName(name) : <FiUser />}</Avatar>
      <Header>
        {name ? name : <CustomLink text="Sign In" to={ROUTE.SIGN_IN} />}
      </Header>
      {isLogged ? (
        <ArrowButton onClick={setIsOpen}>
          <ArrowIcon />
        </ArrowButton>
      ) : (
        <ArrowButton
          isLogged={isLogged}
          onClick={() => {
            navigate(ROUTE.SIGN_IN);
          }}
        >
          <ArrowIcon />
        </ArrowButton>
      )}

      {isOpen && (
        <DropDownContainer>
          <Button>Edit Profile</Button>
          <Button>Log Out</Button>
        </DropDownContainer>
      )}
    </UserBadge>
  );
};
