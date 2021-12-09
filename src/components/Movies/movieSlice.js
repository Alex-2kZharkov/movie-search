import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APPLICATION_STATUSES } from "../../utils/constants";

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  movies: [],
  status: APPLICATION_STATUSES.initial,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=&apikey=21f59099`
    );
    return response.data.Search || [];
  } catch (error) {
    console.log(error);
  } finally {
    return [];
  }
});

export default movieSlice.reducer;
