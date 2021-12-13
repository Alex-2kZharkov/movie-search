import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../app/store";
import App from "../../../app/App";
import React from "react";
import SearchMovie from "./SearchMovie";
import MoviesContainer from "../MoviesContainer";
import FavoriteMoviesContainer from "../../FavoriteMovies/FavoriteMoviesContainer";

describe("UI tests", () => {
  it("should render an input element", () => {
    render(<SearchMovie value="" handler={() => {}} classes={{}} />);
    const input = screen.getByLabelText(/Type movie name/i);
    expect(input).toBeInTheDocument();
  });

  it("should render movies component", () => {
    render(
      <Provider store={store}>
        <MoviesContainer />
      </Provider>
    );
    const h2 = screen.getByText(/Movies/i);
    expect(h2).toBeInTheDocument();
  });

  it("should render empty favourite movies component", () => {
    const { container } = render(
      <Provider store={store}>
        <FavoriteMoviesContainer />
      </Provider>
    );
    expect(
      container.querySelector(".favourite-movies-title")
    ).toBeInTheDocument();
  });
});
