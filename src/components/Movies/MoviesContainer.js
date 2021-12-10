import FavoriteMovieLabel from "../FavoriteMovies/FavoriteMovieLabel";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";
import { useDispatch, useSelector } from "react-redux";
import { APPLICATION_STATUSES } from "../../utils/constants";
import { useEffect, useState } from "react";
import { fetchMovies } from "./movieSlice";

const MoviesContainer = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const onSearchedMovieChange = (e) => setSearchedMovie(e.target.value);

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);
  const favouriteMovies = useSelector((state) => state.movies.favouriteMovies);
  const moviesSearchStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (searchedMovie.length) {
      dispatch(fetchMovies(searchedMovie));
    }
  }, [searchedMovie, dispatch]);

  const searchMovieResults =
    movies.length > 0 ? (
      <MovieList movies={movies} favourites={FavoriteMovieLabel} />
    ) : (
      <h2 className="movie-msg">{movies.length} movies were found:</h2>
    );

  return (
    <div>
      <header className="app-header">
        <h2 className="main-title">Movies</h2>
        <SearchMovie value={searchedMovie} handler={onSearchedMovieChange} />
      </header>{" "}
      {moviesSearchStatus !== APPLICATION_STATUSES.initial && (
        <div className="wrapper">
          {/*ref={moviesContainer}*/}
          <div className="movies-container">
            {searchMovieResults}
            {/*<ScrollButtons moviesContainerRef={moviesContainer} />*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesContainer;
