import { fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import App from "../../app/App";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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
});
