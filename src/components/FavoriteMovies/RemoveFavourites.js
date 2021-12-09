import React from "react";
import logo from "../../cancel.png";

const RemoveFavourites = () => {
  return (
    <span className="remove-favourites">
      Remove from Favourites{" "}
      <img
        src={logo}
        className="remove-icon"
        alt="Close icon"
        width="20"
        height="20"
      />
    </span>
  );
};
export default RemoveFavourites;
