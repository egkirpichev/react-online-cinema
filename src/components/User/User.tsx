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

  return (
    <UserBadge>
      <Avatar>{name ? getShortUserName(name) : <FiUser />}</Avatar>
      <Header>{name ? name : "Guest"}</Header>
      <ArrowButton onClick={setIsOpen}>
        <ArrowIcon />
      </ArrowButton>
      {isOpen && (
        <DropDownContainer>
          {isLogged && (
            <Button
              onClick={() => {
                navigate(ROUTE.SETTINGS);
                setIsOpen();
              }}
            >
              Edit Profile
            </Button>
          )}
          {isLogged ? (
            <Button
              onClick={() => {
                dispatch(signOut());
                setIsOpen();
              }}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate(ROUTE.SIGN_IN);
                setIsOpen();
              }}
            >
              Sign In
            </Button>
          )}
        </DropDownContainer>
      )}
    </UserBadge>
  );
};
