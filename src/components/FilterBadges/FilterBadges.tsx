import { Close, Container, StyledBadge } from "./styles";
import { VscClose } from "react-icons/vsc";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useRef, useState } from "react";
import {
  resetTypeFilter,
  resetYearFilter,
} from "../../store/slices/searchSlice";
export const FilterBadges = () => {
  const { searchRequest } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.search
  );

  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  const dispatch = useAppDispatch();

  const FilterBadgesRef = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    if (FilterBadgesRef.current) setOffset(FilterBadgesRef.current.offsetTop);
  }, []);

  if (searchRequest.type || searchRequest.y)
    return (
      <Container
        offset={offset}
        ref={FilterBadgesRef}
        gridColumn={{
          S: "1/2",
          XL: "2/3",
        }}
        isLightMode={isLightMode}
      >
        {searchRequest.type && (
          <StyledBadge isActive={!!searchRequest.s}>
            {searchRequest.type}
            <Close type="button" onClick={() => dispatch(resetTypeFilter())}>
              <VscClose />
            </Close>
          </StyledBadge>
        )}
        {searchRequest.y && (
          <StyledBadge isActive={!!searchRequest.s}>
            {searchRequest.y}
            <Close type="button" onClick={() => dispatch(resetYearFilter())}>
              <VscClose />
            </Close>
          </StyledBadge>
        )}
      </Container>
    );
  return <></>;
};
