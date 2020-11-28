import './App.css';
import { useState, useEffect, useRef } from 'react';
import MovieList from './Components/MovieList';
import axios from 'axios';
import ScrollButtons from './Components/ScrollButtons';
import Favourites from './Components/Favourites';
import RemoveFavourites from './Components/RemoveFavourites';

const App = () => {
	const [ movies, setMovies ] = useState([]);
	const [ searchValue, setSearchValue ] = useState('');
	const moviesContainer = useRef(null);
	const favouritesMoviesContainer = useRef(null);
	const [ isNoResult, setIsNoResults ] = useState(true);
	const [ favouritesMovies, setFavouriteMovie ] = useState([]);

	const getRequestedMovies = () => {
		axios
			.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=21f59099`)
			.then((response) => {
				if (response.data.Search) {
					setMovies(response.data.Search);
					setIsNoResults(false);
				} else {
					setIsNoResults(true);
				}
			})
			.catch((error) => console.log(error));
	};

	const addFavouriteMovie = (movie) => {
		setFavouriteMovie([ ...favouritesMovies, movie ]);
	};
	useEffect(() => getRequestedMovies(), [ searchValue ]);

	return (
		<div className="app-container">
			<header className="app-header">
				<h1 className="main-title">Movies</h1>
				<div className="search-box">
					<input
						className="search-field"
						value={searchValue}
						onChange={(event) => setSearchValue(event.target.value)}
						placeholder="Type to search"
					/>
				</div>{' '}
			</header>{' '}
			{isNoResult && searchValue !== '' ? <h2 className="movie-msg">No movies were found</h2> : null}
			{!isNoResult && searchValue !== '' ? (
				<div>
					<h2 className="movie-msg">{movies.length} movies were found:</h2>
					<div ref={moviesContainer} className="wrapper">
						<div className="movies-container">
							<MovieList
								movies={movies}
								favourites={Favourites}
								handleFavouriteMovieClick={addFavouriteMovie}
							/>
							<ScrollButtons moviesContainerRef={moviesContainer} />
						</div>
					</div>
				</div>
			) : null}
			<div>
				<h2 className="movie-msg">Your favourites movies:</h2>
				<div ref={favouritesMoviesContainer} className="wrapper">
					<div className="movies-container">
						<MovieList
							movies={favouritesMovies}
							favourites={RemoveFavourites}
							handleFavouriteMovieClick={addFavouriteMovie}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default App;
