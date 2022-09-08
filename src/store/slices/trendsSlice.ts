import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieShort, IRequestParams } from "../../types";

interface ITrendsState {
  movieList: IMovieShort[];
  requestParams: IRequestParams;
  isLoading: boolean;
  error: string | null;
  disableLoader: boolean;
}

const initialState: ITrendsState = {
  movieList: [],
  requestParams: {
    apikey: "",
    s: "",
    page: "",
    y: "",
  },
  isLoading: false,
  error: null,
  disableLoader: false,
};

export const getTrends = createAsyncThunk<
  { Search: IMovieShort[]; params: IRequestParams },
  undefined,
  { rejectValue: string }
>("trends/getTrends", async (_, { rejectWithValue }) => {
  try {
    return await OMDbApi.getTrends();
  } catch (error) {
    return rejectWithValue(error as string);
  }
});

export const loadMoreTrends = createAsyncThunk<
  { Search: IMovieShort[]; params: IRequestParams },
  IRequestParams,
  { rejectValue: string }
>("movies/loadMoreTrends", async (requestParams, { rejectWithValue }) => {
  try {
    const {
      data: { Search },
      config: { params },
    } = await OMDbApi.loadMoreMovies(requestParams);
    return { Search, params };
  } catch (error) {
    return rejectWithValue(error as string);
  }
});

export const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      getTrends.fulfilled,
      (state, { payload: { Search, params } }) => {
        state.isLoading = false;
        Search.forEach((movie) => state.movieList.push(movie));
        state.requestParams = params;
      }
    );
    builder.addCase(getTrends.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload ? payload : state.error;
    });
    builder.addCase(loadMoreTrends.pending, (state) => {
      state.error = null;
    });
    builder.addCase(
      loadMoreTrends.fulfilled,
      (state, { payload: { Search, params } }) => {
        if (Search) {
          Search.forEach((movie) => state.movieList.push(movie));
        } else {
          state.disableLoader = true;
        }
        state.requestParams = params;
      }
    );
    builder.addCase(loadMoreTrends.rejected, (state, { payload }) => {
      state.error = payload ? payload : state.error;
    });
  },
});

export const {} = trendsSlice.actions;
export default trendsSlice.reducer;
