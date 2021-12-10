import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../components/Movies/movieSlice";
import favouriteMoviesReducer from "../components/FavoriteMovies/favouriteMoviesSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    favouriteMovies: favouriteMoviesReducer,
  },
});
