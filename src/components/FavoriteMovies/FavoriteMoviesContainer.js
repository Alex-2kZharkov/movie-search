import { useSelector } from "react-redux";
import MovieList from "../Movies/MovieList";
import { useRef } from "react";
import ScrollButtons from "../ScrollButtons/ScrollButtons";

const FavoriteMoviesContainer = () => {
  const favouriteMovies = useSelector((state) => state.favouriteMovies);

  const moviesContainerRef = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <h2 className="main-title favourite-movies-title">
        Your favourites movies:
      </h2>
      <div ref={moviesContainerRef} className="wrapper">
        <div className="movies-container">
          <MovieList movies={favouriteMovies} isFavouriteMoviesList />
        </div>
      </div>
      <ScrollButtons moviesContainerRef={moviesContainerRef} />
    </div>
  );
};

export default FavoriteMoviesContainer;
