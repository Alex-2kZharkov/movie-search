import "./App.css";
import { useState, useEffect, useRef } from "react";
import MovieList from "../components/Movies/MovieList";
import axios from "axios";
import ScrollButtons from "../components/ScrollButtons";
import RemoveFavourites from "../components/RemoveFavourites";

const App = () => {
  const favouritesMoviesContainer = useRef(null);
  const [isNoResult, setIsNoResults] = useState(true);
  const [favouritesMovies, setFavouriteMovie] = useState([]);
  const [scrollButtonsOffset, setScrollButtonsOffset] = useState({});

  const saveToLocalStorage = (items) => {
    window.localStorage.setItem(
      "react-app-favourites-movies",
      JSON.stringify(items)
    );
  };

  const addFavouriteMovie = (movie) => {
    if (
      favouritesMovies.findIndex((item) => item.imdbID === movie.imdbID) === -1
    ) {
      const favMovies = [...favouritesMovies, movie];
      setFavouriteMovie(favMovies);
      saveToLocalStorage(favMovies);
    }
  };
  const removeFavouriteMovie = (movie) => {
    const movies = favouritesMovies.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setFavouriteMovie(movies);
    saveToLocalStorage(movies);
  };
  // useEffect(getRequestedMovies, [searchValue]);

  useEffect(() => {
    const favMovies = JSON.parse(
      localStorage.getItem("react-app-favourites-movies")
    );
    favMovies ? setFavouriteMovie(favMovies) : setFavouriteMovie([]);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="main-title">Movies</h1>
      </header>{" "}
      {/*{isNoResult && searchValue !== "" ? (*/}
      {/*  <h2 className="movie-msg">No movies were found</h2>*/}
      {/*) : null}*/}
      {/*{!isNoResult && searchValue !== "" ? (*/}
      {/*  */}
      {/*) : null}*/}
      <div>
        {/*<h2 className="movie-msg">Your favourites movies:</h2>*/}
        <div ref={favouritesMoviesContainer} className="wrapper">
          <div className="movies-container">
            <MovieList
              movies={favouritesMovies}
              favourites={RemoveFavourites}
              handleFavouriteMovieClick={removeFavouriteMovie}
            />
            <ScrollButtons
              moviesContainerRef={favouritesMoviesContainer}
              scrollButtonsOffset={scrollButtonsOffset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
