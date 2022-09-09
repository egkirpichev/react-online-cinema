import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchState {
  searchRequest: string | null;
}

const initialState: ISearchState = {
  searchRequest: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchRequest: (state, { payload }: PayloadAction<string>) => {
      state.searchRequest = payload;
    },
  },
});

export const { setSearchRequest } = searchSlice.actions;
export default searchSlice.reducer;
