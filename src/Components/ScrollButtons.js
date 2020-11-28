import React from 'react';
import '../App.css';
const ScrollButtons = ({ moviesContainerRef }) => {
	return (
		<>
			<button
				type="button"
				className="arrow arrow-left"
				onClick={() => (moviesContainerRef.current.scrollLeft -= window.innerWidth)}
			/>
			<button
				type="button"
				className="arrow arrow-right"
				onClick={() => (moviesContainerRef.current.scrollLeft += window.innerWidth)}
			/>
		</>
	);
};
export default ScrollButtons;
