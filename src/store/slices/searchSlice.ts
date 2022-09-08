import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieShort, IRequestParams } from "../../types";

interface ISearchState {
  searchParams: IRequestParams;
  searchResults: IMovieShort[];
  pending: boolean;
  searchEerror: string | null;
  disableSearchLoader: boolean;
}

const initialState: ISearchState = {
  searchParams: {
    apikey: "",
    s: "",
    page: "",
  },
  searchResults: [],
  pending: false,
  searchEerror: null,
  disableSearchLoader: false,
};

export const searchMovies = createAsyncThunk<
  { Search: IMovieShort[]; params: IRequestParams },
  string,
  { rejectValue: string }
>("search/searchMovies", async (searchRequest, { rejectWithValue }) => {
  try {
    const {
      data: { Search },
      config: { params },
    } = await OMDbApi.searchMovies(searchRequest);
    return { Search, params };
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const loadMoreSearchResults = createAsyncThunk<
  { Search: IMovieShort[]; params: IRequestParams },
  IRequestParams,
  { rejectValue: string }
>(
  "movies/loadMoreSearchResults",
  async (requestParams, { rejectWithValue }) => {
    try {
      const {
        data: { Search },
        config: { params },
      } = await OMDbApi.loadMoreMovies(requestParams);
      return { Search, params };
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetSearch: (state) => {
      state.pending = false;
      state.searchEerror = null;
      state.searchResults = [];
      state.searchParams = {
        apikey: "",
        s: "",
        page: "",
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(searchMovies.pending, (state) => {
      state.pending = true;
      state.searchEerror = null;
      state.disableSearchLoader = false;
    });
    builder.addCase(
      searchMovies.fulfilled,
      (state, { payload: { Search, params } }) => {
        state.pending = false;
        Search
          ? (state.searchResults = Search)
          : (state.searchEerror = "Please, specify your search request");
        state.searchParams = params;
      }
    );
    builder.addCase(searchMovies.rejected, (state, { payload }) => {
      state.pending = false;
      state.searchEerror = payload ? payload : state.searchEerror;
    });
    builder.addCase(loadMoreSearchResults.pending, (state) => {
      state.searchEerror = null;
      state.disableSearchLoader = false;
    });
    builder.addCase(
      loadMoreSearchResults.fulfilled,
      (state, { payload: { Search, params } }) => {
        if (Search) {
          Search.forEach((movie) => state.searchResults.push(movie));
        } else {
          state.disableSearchLoader = true;
        }
        state.searchParams = params;
      }
    );
    builder.addCase(loadMoreSearchResults.rejected, (state, { payload }) => {
      state.searchEerror = payload ? payload : state.searchEerror;
      state.disableSearchLoader = true;
    });
  },
});

export const { resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
