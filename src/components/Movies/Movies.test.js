import { fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import App from "../../app/App";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { FAVOURITE_MOVIES_KEY } from "../../utils/constants";
import FavoriteMoviesContainer from "../FavoriteMovies/FavoriteMoviesContainer";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Integration tests", () => {
  describe("Rendering complex components", () => {
    it("should render root App component without errors", () => {
      act(() => {
        render(
          <Provider store={store}>
            <App />
          </Provider>,
          container
        );
      });
      expect(document.querySelector(".app-container")).toBeInTheDocument();
    });

    it("should not render favourite movies component, cause of empty localStorage", () => {
      act(() => {
        render(
          <Provider store={store}>
            <App />
          </Provider>,
          container
        );
      });
      expect(
        document.querySelector(".favourite-movies-title")
      ).not.toBeInTheDocument();
    });
  });

  describe("Searching movies", () => {
    it("should trigger http request to movies API and return list of movies", async () => {
      act(() => {
        render(
          <Provider store={store}>
            <App />
          </Provider>,
          container
        );
      });
      const input = document.querySelector("input");
      act(() => {
        fireEvent.change(input, { target: { value: "Spider-Man" } });
      });

      const searchResults = await screen.findByText("Spider-Man");
      const scrollButtons = await screen.findAllByRole("button", {
        class: "arrow",
      });
      expect(searchResults).toBeInTheDocument();
      expect(Array.isArray(scrollButtons)).toBeTruthy();
    });

    it("should not find any movies when movie name is incorrect", async () => {
      act(() => {
        render(
          <Provider store={store}>
            <App />
          </Provider>,
          container
        );
      });
      const input = document.querySelector("input");
      act(() => {
        fireEvent.change(input, { target: { value: "!!!" } });
      });

      const searchMessage = await screen.findByText("0 movies were found:");
      expect(searchMessage).toBeInTheDocument();
    });
  });

  describe("Favourite movies", () => {
    describe("Adding to favourite movies", () => {
      it("should movie to favourite movies list", async () => {
        act(() => {
          render(
            <Provider store={store}>
              <App />
            </Provider>,
            container
          );
        });
        const input = document.querySelector("input");
        act(() => {
          fireEvent.change(input, { target: { value: "Spider-Man" } });
        });

        const [firstMovieButton] = await screen.findAllByRole("button");

        act(() => {
          fireEvent.click(firstMovieButton);
        });

        const favouriteMoviesHeader = await screen.findByText(
          "Your favourites movies:"
        );
        const [, firstFavouriteMovie] = await screen.findAllByText(
          "Spider-Man"
        );
        expect(favouriteMoviesHeader).toBeInTheDocument();
        expect(firstFavouriteMovie).toBeInTheDocument();

        act(() => {
          fireEvent.click(firstMovieButton);
        });
        const [, stillFirstFavouriteMovie, secondFavouriteMovie] =
          await screen.findAllByText("Spider-Man");
        expect(stillFirstFavouriteMovie).toBeInTheDocument();
        expect(secondFavouriteMovie).toBeFalsy();
      });
    });

    describe("Removing from favourite movies", () => {
      it("should remove movie from list of favourite movies", async () => {
        const movie = {
          Title: "Spider-Man",
          Year: "2002",
          imdbID: "tt0145487",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
        };
        localStorage.setItem(FAVOURITE_MOVIES_KEY, movie);

        act(() => {
          render(
            <Provider store={store}>
              <FavoriteMoviesContainer />
            </Provider>,
            container
          );
        });
        const buttons = await screen.findAllByRole("button");
        act(() => {
          fireEvent.click(buttons[0]);
        });

        const favouriteMovie = screen.queryByText("Spider-Man");
        expect(favouriteMovie).toBeFalsy();
      });
    });
  });
});
