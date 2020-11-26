import "./App.css";
import {useState, useEffect} from "react";
import MovieList from "./Components/MovieList";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getRequestedMovies = () => {
    axios.get("http://www.omdbapi.com/?s=Shrek&apikey=21f59099")
    .then(response => {

      if(response.data.Search) {
        setMovies(response.data.Search);
      }

    }).catch(error => console.log(error))
  }
  useEffect(() => {
        getRequestedMovies();
  }, []);
  
    return (
    <div className="App-container">
      <div className="movies-container">
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
