import FavoriteMovieLabel from "../FavoriteMovies/FavoriteMovieLabel";
import { useDispatch } from "react-redux";
import { addMovieToFavourites } from "../FavoriteMovies/favouriteMoviesSlice";

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();

  return movies.map((movie, index) => {
    return (
      <div key={index} className="movie-container">
        <img
          src={movie.Poster}
          className="movie-poster"
          alt="Poster of the movie"
        />
        <button
          className="overlay"
          onClick={() => dispatch(addMovieToFavourites(movie))}
        >
          <FavoriteMovieLabel />
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
