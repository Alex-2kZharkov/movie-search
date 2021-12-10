import {
  getFavouriteMoviesFromLocalStorage,
  saveFavouriteMovieToLocalStorage,
} from "../../helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = getFavouriteMoviesFromLocalStorage();

const favouriteMoviesSlice = createSlice({
  name: "favouriteMovies",
  initialState,
  reducers: {
    addMovieToFavourites(state, action) {
      const updatedFavouriteMovies = [...state, action.payload];
      saveFavouriteMovieToLocalStorage(updatedFavouriteMovies);
      return updatedFavouriteMovies;
    },

    removeMovieFromFavourites(state, action) {
      const updatedFavouriteMovies = state.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      saveFavouriteMovieToLocalStorage(updatedFavouriteMovies);
      return updatedFavouriteMovies;
    },
  },
});

export default favouriteMoviesSlice.reducer;
export const { addMovieToFavourites, removeMovieFromFavourites } =
  favouriteMoviesSlice.actions;
