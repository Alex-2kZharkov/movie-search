import FavoriteMovieLabel from "../FavoriteMovies/FavoriteMovieLabel";
import ScrollButtons from "../ScrollButtons/ScrollButtons";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";
import { useDispatch, useSelector } from "react-redux";
import { APPLICATION_STATUSES } from "../../utils/constants";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const moviesSearchStatus = useSelector((state) => state.movies.status);

  console.log(movies);
  return (
    <div>
      <header className="app-header">
        <h1 className="main-title">Movies</h1>
        <SearchMovie />
      </header>{" "}
      {moviesSearchStatus !== APPLICATION_STATUSES.initial && (
        <div>
          <div className="wrapper">
            {/*ref={moviesContainer}*/}
            <div className="movies-container">
              <h2 className="movie-msg">{movies.length} movies were found:</h2>
              <MovieList movies={movies} favourites={FavoriteMovieLabel} />
              {/*<ScrollButtons moviesContainerRef={moviesContainer} />*/}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesContainer;
