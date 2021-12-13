import MovieList from "./MovieList";
import SearchMovie from "./Search/SearchMovie";
import { useDispatch, useSelector } from "react-redux";
import { APPLICATION_STATUSES } from "../../utils/constants";
import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "./movieSlice";
import ScrollButtons from "../ScrollButtons/ScrollButtons";

const MoviesContainer = () => {
  const moviesContainerRef = useRef(null);
  const [searchedMovie, setSearchedMovie] = useState("");
  const onSearchedMovieChange = (e) => setSearchedMovie(e.target.value);

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);
  const moviesSearchStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (searchedMovie.length) {
      dispatch(fetchMovies(searchedMovie));
    }
  }, [searchedMovie, dispatch]);

  const searchMovieResults =
    movies.length > 0 ? (
      <MovieList movies={movies} />
    ) : (
      <h2 className="movie-msg">{movies.length} movies were found:</h2>
    );

  return (
    <div style={{ position: "relative" }} className="movies-list-container">
      <header className="app-header">
        <h2 className="main-title">Movies</h2>
        <SearchMovie value={searchedMovie} handler={onSearchedMovieChange} />
      </header>{" "}
      {moviesSearchStatus !== APPLICATION_STATUSES.initial && (
        <div>
          <div ref={moviesContainerRef} className="wrapper">
            <div className="movies-container">{searchMovieResults}</div>
          </div>
          {movies.length && (
            <ScrollButtons moviesContainerRef={moviesContainerRef} />
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesContainer;
