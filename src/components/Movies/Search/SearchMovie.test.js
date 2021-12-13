import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../app/store";
import React from "react";
import SearchMovie from "./SearchMovie";
import MoviesContainer from "../MoviesContainer";
import FavoriteMoviesContainer from "../../FavoriteMovies/FavoriteMoviesContainer";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("UI tests", () => {
  it("should render an input element", () => {
    render(<SearchMovie value="" handler={() => {}} classes={{}} />);
    const input = screen.getByLabelText(/Type movie name/i);
    expect(input).toBeInTheDocument();
  });

  it("should secure the value of the input element", () => {
    act(() => {
      render(
        <Provider store={store}>
          <MoviesContainer />
        </Provider>,
        container
      );
    });
    const inputValue = "<script>alert(localStorage)</script>";
    const input = document.querySelector("input");
    act(() => {
      fireEvent.change(input, { target: { value: inputValue } });
    });
    expect(input.value).not.toBe(inputValue);
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
