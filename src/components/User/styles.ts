import styled from "styled-components";
import { Body1, Color } from "../../ui";
import { IoIosArrowDown } from "react-icons/io";

interface IProps {
  isOpen?: boolean;
  isLogged?: boolean;
  isLightMode: boolean;
}

export const UserBadge = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  place-self: center;
  width: 100%;
`;

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${Color.White};
  background: ${Color.PrimaryDark};
  border-radius: 10px;
`;

export const DropDownContainer = styled.div<IProps>`
  position: absolute;
  top: 65px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
  width: 100%;
  background-color: ${Color.Graphite};
  border: ${({ isLightMode }) =>
    isLightMode ? `1px solid ${Color.Graphite}` : "none"};
  border-radius: 10px;
  animation: growDown 300ms ease-in-out;
  transform-origin: top;
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    50% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const Button = styled.button<IProps>`
  display: block;
  width: 100%;
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: ${({ isLightMode }) => (isLightMode ? Color.Dark : Color.White)};
  background-color: ${({ isLightMode }) =>
    isLightMode ? Color.White : Color.Dark};
  border: none;
  cursor: pointer;

  :hover {
    color: ${Color.PrimaryDark};
  }
`;

export const Header = styled(Body1)<IProps>`
  max-width: 130px;
  padding: 10px;
  align-self: center;
  text-align: center;
  color: ${({ isLightMode }) => (isLightMode ? Color.Dark : Color.White)};
`;

export const ArrowButton = styled.button<IProps>`
  width: 20px;
  color: ${({ isLightMode }) => (isLightMode ? Color.Light : Color.White)};
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: ${Color.PrimaryDark};
  }
`;

export const ArrowIcon = styled(IoIosArrowDown)`
  width: 10px;
  stroke-width: 35;
`;
