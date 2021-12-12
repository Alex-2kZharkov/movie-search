import { createSlice } from "@reduxjs/toolkit";
import {
  getFavouriteMoviesFromLocalStorage,
  getUniqueMovies,
  saveFavouriteMovieToLocalStorage,
} from "../../utils/helpers";
import { FAVOURITE_MOVIES_KEY } from "../../utils/constants";

const initialState = getFavouriteMoviesFromLocalStorage(FAVOURITE_MOVIES_KEY);

const favouriteMoviesSlice = createSlice({
  name: "favouriteMovies",
  initialState,
  reducers: {
    addMovieToFavourites(state, action) {
      const updatedFavouriteMovies = [...state, action.payload];
      const uniqueMovies = getUniqueMovies(updatedFavouriteMovies);
      saveFavouriteMovieToLocalStorage(FAVOURITE_MOVIES_KEY, uniqueMovies);
      return uniqueMovies;
    },

    removeMovieFromFavourites(state, action) {
      const updatedFavouriteMovies = state.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      saveFavouriteMovieToLocalStorage(
        FAVOURITE_MOVIES_KEY,
        updatedFavouriteMovies
      );
      return updatedFavouriteMovies;
    },
  },
});

export default favouriteMoviesSlice.reducer;
export const { addMovieToFavourites, removeMovieFromFavourites } =
  favouriteMoviesSlice.actions;
