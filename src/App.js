import './App.css';
import { useState, useEffect, useRef } from 'react';
import MovieList from './components/MovieList';
import axios from 'axios';
import ScrollButtons from './components/ScrollButtons';
import Favourites from './components/Favourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
	const [ movies, setMovies ] = useState([]);
	const [ searchValue, setSearchValue ] = useState('');
	const moviesContainer = useRef(null);
	const favouritesMoviesContainer = useRef(null);
	const [ isNoResult, setIsNoResults ] = useState(true);
	const [ favouritesMovies, setFavouriteMovie ] = useState([]);
	const [ scrollButtonsOffset, setScrollButtonsOffset ] = useState({});

	const getRequestedMovies = () => {
		axios
			.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=21f59099`)
			.then((response) => {
				if (response.data.Search) {
					setMovies(response.data.Search);
					setIsNoResults(false);
					setScrollButtonsOffset({ top: '70%' });
				} else {
					setIsNoResults(true);
					setScrollButtonsOffset({ top: '23%' });
				}
			})
			.catch((error) => console.log(error));
	};

	const saveToLocalStorage = (items) => {
		window.localStorage.setItem('react-app-favourites-movies', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		if (favouritesMovies.findIndex((item) => item.imdbID === movie.imdbID) === -1) {
			const favMovies = [ ...favouritesMovies, movie ];
			setFavouriteMovie(favMovies);
			saveToLocalStorage(favMovies);
		}
	};
	const removeFavouriteMovie = (movie) => {
		const movies = favouritesMovies.filter((item) => item.imdbID !== movie.imdbID);
		setFavouriteMovie(movies);
		saveToLocalStorage(movies);
	};
	useEffect(getRequestedMovies, [ searchValue ]);

	useEffect(() => {
		const favMovies = JSON.parse(localStorage.getItem('react-app-favourites-movies'));
		favMovies ? setFavouriteMovie(favMovies) : setFavouriteMovie([]);
	}, []);

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
