import FavoriteMovieLabel from "../FavoriteMovies/FavoriteMovieLabel";
import { useDispatch } from "react-redux";
import {
  addMovieToFavourites,
  removeMovieFromFavourites,
} from "../FavoriteMovies/favouriteMoviesSlice";
import RemoveFavourites from "../FavoriteMovies/RemoveFavourites";

const MovieList = ({ movies, isFavouriteMoviesList }) => {
  const dispatch = useDispatch();

  const FavouriteComponent = isFavouriteMoviesList
    ? RemoveFavourites
    : FavoriteMovieLabel;

  return movies.map((movie, index) => {
    const onOverlayButtonClick = isFavouriteMoviesList
      ? () => dispatch(removeMovieFromFavourites(movie))
      : () => dispatch(addMovieToFavourites(movie));

    return (
      <div key={index} className="movie-container">
        <img
          src={movie.Poster}
          className="movie-poster"
          alt="Poster of the movie"
        />
        <button className="overlay" onClick={onOverlayButtonClick}>
          <FavouriteComponent />
        </button>
        <div className="movie-information">
          <div className="movie-information__year">{movie.Year}</div>
          <div className="movie-information__title">{movie.Title}</div>
        </div>
      </div>
    );
  });
};
export default MovieList;
