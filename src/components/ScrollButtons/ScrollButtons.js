import React from "react";
import "../../app/App.css";
const ScrollButtons = ({ moviesContainerRef, scrollButtonsOffset }) => {
  return (
    <>
      <button
        style={scrollButtonsOffset}
        type="button"
        className="arrow arrow-left"
        onClick={() =>
          (moviesContainerRef.current.scrollLeft -= window.innerWidth)
        }
      />
      <button
        style={scrollButtonsOffset}
        type="button"
        className="arrow arrow-right"
        onClick={() =>
          (moviesContainerRef.current.scrollLeft += window.innerWidth)
        }
      />
    </>
  );
};
export default ScrollButtons;
