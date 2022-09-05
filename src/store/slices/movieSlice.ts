import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieShort, IRequestParams } from "../../types";

interface IMoviesState {
  movies: IMovieShort[];
  initialParams: IRequestParams;
  isLoading: boolean;
  error: string | null;
}

const initialState: IMoviesState = {
  movies: [],
  initialParams: {
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
>("movies/loadMoreMovies", async (initialParams, { rejectWithValue }) => {
  try {
    return await OMDbApi.loadMoreMovies(initialParams);
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
      state.movies = payload.Search;
      state.initialParams = payload.params;
    });
    builder.addCase(getRandomMovies.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload ? payload : state.error;
    });
    builder.addCase(loadMoreMovies.pending, (state) => {
      state.error = null;
    });
    builder.addCase(loadMoreMovies.fulfilled, (state, { payload }) => {
      state.movies = [...state.movies, ...payload.Search];
      state.initialParams = payload.params;
    });
    builder.addCase(loadMoreMovies.rejected, (state, { payload }) => {
      state.error = payload ? payload : state.error;
    });
  },
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
