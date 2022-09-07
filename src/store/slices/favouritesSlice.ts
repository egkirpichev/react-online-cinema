import { createSlice } from "@reduxjs/toolkit";
import { IMovieShort } from "../../types";

interface IFavouritesState {
  movies: IMovieShort[];
  user: string | null;
}

const initialState: IFavouritesState = {
  movies: [],
  user: null,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
});

export default favouritesSlice.reducer;
