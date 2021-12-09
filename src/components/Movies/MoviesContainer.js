import FavoriteMovieLabel from "../FavoriteMovieLabel";
import ScrollButtons from "../ScrollButtons";
import MovieList from "./MovieList";

const MoviesContainer = () => {
  return (
    <div>
      <h2 className="movie-msg">{movies.length} movies were found:</h2>
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
