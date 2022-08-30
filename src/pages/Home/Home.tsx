import { useEffect, useState } from "react";
import { CustomSpinner } from "../../components/CustomSpinner";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Footer } from "../../components/Footer";
import { MovieList } from "../../components/MovieList";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieShort } from "../../types";
import { IRequestParams } from "../../types/types";
import { Color } from "../../ui";

export const Home = () => {
  const [movieList, setMovieList] = useState<IMovieShort[]>([]);
  const [initialParams, setInitialParams] = useState<IRequestParams>({
    apikey: "",
    s: "",
    page: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    OMDbApi.getRandomMovies()
      .then(({ Search, params }) => {
        setMovieList(Search);
        setInitialParams(params);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  }, []);

  if (isLoading) {
    return <CustomSpinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
  }

  return (
    <>
      <MovieList movieList={movieList} />
      {!isLoading && (
        <Footer
          initialParams={initialParams}
          setInitialParams={setInitialParams}
          setMovieList={setMovieList}
        />
      )}
    </>
  );
};
