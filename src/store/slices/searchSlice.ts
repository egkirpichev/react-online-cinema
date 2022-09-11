import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilters, IRequestParams } from "../../types";

interface ISearchState {
  searchRequest: IRequestParams;
}

const initialState: ISearchState = {
  searchRequest: {
    s: "",
    type: "",
    y: "",
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchRequest: (
      { searchRequest },
      { payload }: PayloadAction<string>
    ) => {
      searchRequest.s = payload;
      if (payload === "") {
        searchRequest.type = "";
        searchRequest.y = "";
      }
    },
    setFilters: (
      { searchRequest },
      { payload: { type, year } }: PayloadAction<IFilters>
    ) => {
      searchRequest.type = type;
      searchRequest.y = year;
    },
    resetTypeFilter: ({ searchRequest }) => {
      searchRequest.type = "";
    },
    resetYearFilter: ({ searchRequest }) => {
      searchRequest.y = "";
    },
  },
});

export const {
  setSearchRequest,
  setFilters,
  resetTypeFilter,
  resetYearFilter,
} = searchSlice.actions;
export default searchSlice.reducer;
