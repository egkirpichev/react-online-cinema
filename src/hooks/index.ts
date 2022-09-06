import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    screenWidth: 0,
    screenHeight: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const useInput = (initialValue: string = "") => {
  const [value, setInputValue] = useState<string>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const { name, email, isLogged } = useAppSelector((state) => state.user);
  return { name, email, isLogged };
};

export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

export const useColorMode = (initialState: boolean): boolean => {
  const [isLightMode, setIsLightMode] = useState<boolean>(initialState);
  return isLightMode;
};
