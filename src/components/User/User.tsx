import { useAppDispatch, useAppSelector, useToggle } from "../../hooks";
import { Avatar, ArrowButton, DropDownContainer, Header, Button, UserBadge } from "./styles";
import { FiUser } from "react-icons/fi";
import { getShortUserName } from "../../utils/utils";
import { ROUTE } from "../../router";
import { useNavigate } from "react-router-dom";
import { signUserOut } from "../../store/slices/userSlice";
import { IoIosArrowDown } from "react-icons/io";

export const User = () => {
  const { isLogged, name, isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user,
  );
  const [isOpen, setIsOpen] = useToggle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <UserBadge>
      <Avatar>{name ? getShortUserName(name) : <FiUser />}</Avatar>
      <Header $isLightMode={isLightMode}>{name ? name : "Guest"}</Header>
      <ArrowButton onClick={setIsOpen} $isLightMode={isLightMode}>
        <IoIosArrowDown size={20} />
      </ArrowButton>
      {isOpen && (
        <DropDownContainer $isLightMode={isLightMode}>
          {isLogged && (
            <Button
              $isLightMode={isLightMode}
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
              $isLightMode={isLightMode}
              onClick={() => {
                dispatch(signUserOut());
                setIsOpen();
              }}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              $isLightMode={isLightMode}
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
