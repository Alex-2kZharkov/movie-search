import "./App.css";
import MoviesContainer from "../components/Movies/MoviesContainer";
import FavoriteMoviesContainer from "../components/FavoriteMovies/FavoriteMoviesContainer";
import { useSelector } from "react-redux";

const App = () => {
  const favouriteMoviesLength = useSelector(
    (state) => state.favouriteMovies.length
  );
  return (
    <div className="app-container">
      <MoviesContainer />
      {Boolean(favouriteMoviesLength) && <FavoriteMoviesContainer />}
    </div>
  );
};
export default App;
