import { FAVOURITE_MOVIES_KEY } from "./constants";

export const getFavouriteMoviesFromLocalStorage = () => {
  const favouriteMovies = JSON.parse(
    localStorage.getItem(FAVOURITE_MOVIES_KEY)
  );
  return favouriteMovies ? favouriteMovies : [];
};

export const getUniqueMovies = (movies) => {
  return movies.filter(
    (movie, index, self) =>
      self.findIndex((innerMovie) => innerMovie.imdbID === movie.imdbID) ===
      index
  );
};

export const saveFavouriteMovieToLocalStorage = (movies) => {
  window.localStorage.setItem(FAVOURITE_MOVIES_KEY, JSON.stringify(movies));
};
