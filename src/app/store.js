import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../components/movieSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
