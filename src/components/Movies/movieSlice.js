import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APPLICATION_STATUSES } from "../../utils/constants";

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  movies: [],
  status: APPLICATION_STATUSES.initial,
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (movieName) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${movieName}&apikey=21f59099`
    );
    return response.data.Search ?? [];
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = APPLICATION_STATUSES.succeeded;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = APPLICATION_STATUSES.failed;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
