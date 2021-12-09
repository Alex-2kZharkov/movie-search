import FavoriteMovieLabel from "../FavoriteMovies/FavoriteMovieLabel";
import ScrollButtons from "../ScrollButtons/ScrollButtons";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";

const MoviesContainer = () => {
  return (
    <div>
      <header className="app-header">
        <h1 className="main-title">Movies</h1>
        <SearchMovie />
      </header>{" "}
      {/*<h2 className="movie-msg">{movies.length} movies were found:</h2>*/}
      {/*<div ref={moviesContainer} className="wrapper">*/}
      {/*  <div className="movies-container">*/}
      {/*    <MovieList*/}
      {/*      movies={movies}*/}
      {/*      favourites={FavoriteMovieLabel}*/}
      {/*      handleFavouriteMovieClick={addFavouriteMovie}*/}
      {/*    />*/}
      {/*    <ScrollButtons moviesContainerRef={moviesContainer} />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default MoviesContainer;
