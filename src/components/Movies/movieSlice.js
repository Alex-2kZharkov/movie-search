import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const fetchMovies = createAsyncThunk("posts/fetchPosts", async () => {
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
