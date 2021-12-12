export const getFavouriteMoviesFromLocalStorage = (key) => {
  const favouriteMovies = JSON.parse(window.localStorage.getItem(key));
  return favouriteMovies ? favouriteMovies : [];
};

export const getUniqueMovies = (movies) => {
  return movies.filter(
    (movie, index, self) =>
      self.findIndex((innerMovie) => innerMovie.imdbID === movie.imdbID) ===
      index
  );
};

export const saveFavouriteMovieToLocalStorage = (key, movies) => {
  localStorage.setItem(key, JSON.stringify(movies));
};
