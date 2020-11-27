import './App.css';
import { useState, useEffect, useRef } from 'react';
import MovieList from './Components/MovieList';
import axios from 'axios';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const moviesContainer = useRef(null);

	const getRequestedMovies = () => {
		axios
			.get('http://www.omdbapi.com/?s=Friends&apikey=21f59099')
			.then((response) => {
				if (response.data.Search) {
					console.log(response.data.Search);
					setMovies(response.data.Search);
				}
			})
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		getRequestedMovies();
	}, []);

	return (
		<div className="app-container">
			<header className="app-header">
				<h1 className="main-title">Movies</h1>
				<div className="search-box">
					<input className="search-field" value={searchValue} />
				</div>{' '}
				<div />
			</header>{' '}
			<div />
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
		</div>
	);
};
export default App;
