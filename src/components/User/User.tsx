import { useAppDispatch, useAppSelector, useToggle } from "../../hooks";
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
import { signOut } from "../../store/slices/userSlice";
import { getAuth } from "firebase/auth";

export const User = () => {
  const { isLogged, name } = useAppSelector((userSlice) => userSlice.user);
  const [isOpen, setIsOpen] = useToggle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

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
          <Button
            onClick={() => {
              navigate(ROUTE.SETTINGS);
              setIsOpen();
            }}
          >
            Edit Profile
          </Button>
          <Button
            onClick={() => {
              dispatch(signOut());
              setIsOpen();
            }}
          >
            Sign Out
          </Button>
        </DropDownContainer>
      )}
    </UserBadge>
  );
};
