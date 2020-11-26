const MovieList = (props) => {
    return (
       props.movies.map((movie, index) => {
           return (<div key={index} className="movie-container">
           <img src={movie.Poster} className="movie-poster" alt="Poster of the movie"></img>
       </div>)
       })
    )
}
export default MovieList;