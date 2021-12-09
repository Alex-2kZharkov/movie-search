const FavoriteMoviesContainer = () => {
  return (
    <div>
      {/*<h2 className="movie-msg">Your favourites movies:</h2>*/}
      <div ref={favouritesMoviesContainer} className="wrapper">
        <div className="movies-container"></div>
      </div>
    </div>
  );
};

export default FavoriteMoviesContainer;
