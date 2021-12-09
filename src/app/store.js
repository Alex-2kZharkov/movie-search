import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../components/Movies/movieSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
