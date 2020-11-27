import './App.css';
import { useState, useEffect, useRef } from 'react';
import MovieList from './Components/MovieList';
import axios from 'axios';

const App = () => {
	const [ movies, setMovies ] = useState([]);
	const [ searchValue, setSearchValue ] = useState('');
	const moviesContainer = useRef(null);
	const [ isNoResult, setIsNoResults ] = useState(true);
	let noResultMsg;

	const getRequestedMovies = () => {
		axios
			.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=21f59099`)
			.then((response) => {
				console.log(response);
				if (response.data.Search) {
					console.log(response.data.Search);
					setMovies(response.data.Search);
					setIsNoResults(false);
				} else {
					console.log('No movies to show');
					setIsNoResults(true);
				}
			})
			.catch((error) => console.log(error));
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
			{isNoResult && searchValue.length ? <h2 className="no-movie-msg">No movies</h2> : null}
			{!isNoResult && searchValue.length ? (
				<div ref={moviesContainer} className="movies-container">
					<MovieList movies={movies} />
					<button
						type="button"
						className="arrow arrow-left"
						onClick={() => (moviesContainer.current.scrollLeft -= window.innerWidth)}
					/>
					<button
						type="button"
						className="arrow arrow-right"
						onClick={() => (moviesContainer.current.scrollLeft += window.innerWidth)}
					/>
				</div>
			) : null}
		</div>
	);
};
export default App;
