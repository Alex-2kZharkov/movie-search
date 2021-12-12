import { useSelector } from "react-redux";
import MovieList from "../Movies/MovieList";

const FavoriteMoviesContainer = () => {
  const favouriteMovies = useSelector((state) => state.favouriteMovies);

  return (
    <div>
      <h2 className="main-title favourite-movies-title">
        Your favourites movies:
      </h2>
      <div className="wrapper">
        <div className="movies-container">
          <MovieList movies={favouriteMovies} isFavouriteMoviesList />
        </div>
      </div>
    </div>
  );
};

export default FavoriteMoviesContainer;
