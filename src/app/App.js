import "./App.css";
import MoviesContainer from "../components/Movies/MoviesContainer";
import FavoriteMoviesContainer from "../components/FavoriteMovies/FavoriteMoviesContainer";
import { useSelector } from "react-redux";

const App = () => {
  const favouriteMovies = useSelector((state) => state.favouriteMovies);
  return (
    <div className="app-container">
      <MoviesContainer />
      {Boolean(favouriteMovies.length) && <FavoriteMoviesContainer />}
    </div>
  );
};
export default App;
