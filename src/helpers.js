import { FAVOURITE_MOVIES_KEY } from "./utils/constants";

export const getFavouriteMoviesFromLocalStorage = () => {
  const favouriteMovies = JSON.parse(
    localStorage.getItem(FAVOURITE_MOVIES_KEY)
  );
  return favouriteMovies ? favouriteMovies : [];
};

export const saveFavouriteMovieToLocalStorage = (movies) => {
  window.localStorage.setItem(FAVOURITE_MOVIES_KEY, JSON.stringify(movies));
};
