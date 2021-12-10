import { getFavouriteMoviesFromLocalStorage } from "../../helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = getFavouriteMoviesFromLocalStorage();

const favouriteMoviesSlice = createSlice({});
