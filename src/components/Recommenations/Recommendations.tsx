import { useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRecommendations } from "../../store/slices/movieSlice";
import { MovieListItem } from "../MovieListItem";
import { SearchError } from "../SearchError";
import { SearchSpinner } from "../SearchSpinner";
import { Arrow, Header, ItemContainer, Slider, Title, Wrapper } from "./styles";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

export const Recommendations = () => {
  const { recommendedMovies, areRecommendationsLoading, recommendationsError, recommendation } =
    useAppSelector(({ persistedReducer }) => persistedReducer.movie);

  const dispatch = useAppDispatch();

  const [offset, setOffset] = useState<number>(0);
  const [scrollConstraint, setScrollConstraint] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useMemo(() => {
    if (recommendedMovies.length === 0) dispatch(getRecommendations(recommendation));
    if (wrapperRef.current) {
      setScrollConstraint(wrapperRef.current.scrollWidth - wrapperRef.current.offsetWidth);
    }
  }, [areRecommendationsLoading, wrapperRef.current]);

  if (areRecommendationsLoading) {
    return <SearchSpinner />;
  }

  if (recommendationsError) {
    return <SearchError message={recommendationsError} />;
  }

  return (
    <Wrapper ref={wrapperRef}>
      <Header>
        <Title>Recommendations</Title>
        <Arrow
          disabled={offset >= 0}
          type="button"
          onClick={() => {
            setOffset((offset) => {
              return offset + 272;
            });
          }}
        >
          <IoMdArrowRoundBack size={20} />
        </Arrow>
        <Arrow
          disabled={offset + scrollConstraint <= 0}
          type="button"
          onClick={() => {
            setOffset((offset) => {
              return offset - 272;
            });
          }}
        >
          <IoMdArrowRoundForward size={20} />
        </Arrow>
      </Header>
      <Slider as={motion.div} animate={{ x: `${offset}px` }}>
        {recommendedMovies.map((movieListItem) => {
          return (
            <ItemContainer>
              <MovieListItem key={movieListItem.imdbID} movie={movieListItem} />
            </ItemContainer>
          );
        })}
      </Slider>
    </Wrapper>
  );
};