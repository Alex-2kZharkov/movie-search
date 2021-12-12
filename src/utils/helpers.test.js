import {
  getFavouriteMoviesFromLocalStorage,
  getUniqueMovies,
  saveFavouriteMovieToLocalStorage,
} from "./helpers";
import { FAVOURITE_MOVIES_KEY } from "./constants";

const movie = [
  {
    Title: "Spider-man",
    Year: "2000",
  },
];

describe("Unit tests", () => {
  describe("Local storage unit tests", () => {
    beforeEach(() => {
      localStorage.clear();
      jest.clearAllMocks();
      localStorage.setItem.mockClear();
    });

    it("should add new key-value pair to localStorage", () => {
      saveFavouriteMovieToLocalStorage(FAVOURITE_MOVIES_KEY, movie);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        FAVOURITE_MOVIES_KEY,
        JSON.stringify(movie)
      );
    });

    it("should add new key-value pair to localStorage with existing keys", () => {
      saveFavouriteMovieToLocalStorage("name", "Test");
      saveFavouriteMovieToLocalStorage(FAVOURITE_MOVIES_KEY, movie);
      expect(localStorage.setItem).toHaveBeenCalledTimes(2);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        FAVOURITE_MOVIES_KEY,
        JSON.stringify(movie)
      );
    });

    it("should return array of movies for specified key", () => {
      saveFavouriteMovieToLocalStorage(FAVOURITE_MOVIES_KEY, movie);
      const result = getFavouriteMoviesFromLocalStorage(FAVOURITE_MOVIES_KEY);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(1);
    });

    it("should return empty array when there is no movies in localStorage", () => {
      const result = getFavouriteMoviesFromLocalStorage(FAVOURITE_MOVIES_KEY);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(0);
    });
  });
  describe("Helper functions unit tests", () => {
    it("should remove duplicated movies from array", () => {
      const movies = [
        {
          Title: "Spider-man",
          Year: "2000",
          imdbID: "123",
        },

        {
          Title: "Spider-man",
          Year: "2000",
          imdbID: "123",
        },
      ];
      expect(getUniqueMovies(movies).length).toBe(1);
    });
    it("should not change array of unique movies", () => {
      const movies = [
        {
          Title: "Spider-man",
          Year: "2000",
          imdbID: "123",
        },

        {
          Title: "Spider-man2",
          Year: "2004",
          imdbID: "321",
        },
      ];
      const [firstMovie, secondMovie] = getUniqueMovies(movies);
      expect(firstMovie.imdbID).toBe("123");
      expect(secondMovie.imdbID).toBe("321");
    });
  });
});
