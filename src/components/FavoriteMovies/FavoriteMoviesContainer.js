const FavoriteMoviesContainer = () => {
  return (
    <div>
      <h2 className="main-title">Your favourites movies:</h2>
      <div ref={favouritesMoviesContainer} className="wrapper">
        <div className="movies-container"></div>
      </div>
    </div>
  );
};

export default FavoriteMoviesContainer;
