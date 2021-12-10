export const getFavouriteMoviesFromLocalStorage = () => {
  const favouriteMovies = JSON.parse(
    localStorage.getItem("react-app-favourites-movies")
  );
  return favMovies ? favMovies : [];
};

export const saveFavouriteMoviesToLocalStorage = (items) => {
  window.localStorage.setItem(
    "react-app-favourites-movies",
    JSON.stringify(items)
  );
};
