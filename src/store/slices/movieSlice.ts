import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieShort, IRequestParams } from "../../types";

interface IMoviesState {
  movieList: IMovieShort[];
  requestParams: IRequestParams;
  isLoading: boolean;
  error: string | null;
}

const initialState: IMoviesState = {
  movieList: [],
  requestParams: {
    apikey: "",
    s: "",
    page: "",
  },
  isLoading: false,
  error: null,
};

export const getRandomMovies = createAsyncThunk<
  { Search: IMovieShort[]; params: IRequestParams },
  undefined,
  { rejectValue: string }
>("movies/getRandomMovies", async (_, { rejectWithValue }) => {
  try {
    return await OMDbApi.getRandomMovies();
  } catch (error) {
    return rejectWithValue(error as string);
  }
});

export const loadMoreMovies = createAsyncThunk<
  { Search: IMovieShort[]; params: IRequestParams },
  IRequestParams,
  { rejectValue: string }
>("movies/loadMoreMovies", async (requestParams, { rejectWithValue }) => {
  try {
    return await OMDbApi.loadMoreMovies(requestParams);
  } catch (error) {
    return rejectWithValue(error as string);
  }
});

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRandomMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getRandomMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      payload.Search.forEach((movie) => state.movieList.push(movie));
      state.requestParams = payload.params;
    });
    builder.addCase(getRandomMovies.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload ? payload : state.error;
    });
    builder.addCase(loadMoreMovies.pending, (state) => {
      state.error = null;
    });
    builder.addCase(
      loadMoreMovies.fulfilled,
      (state, { payload: { Search, params } }) => {
        Search.forEach((movie) => state.movieList.push(movie));
        state.requestParams = params;
      }
    );
    builder.addCase(loadMoreMovies.rejected, (state, { payload }) => {
      state.error = payload ? payload : state.error;
    });
  },
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
