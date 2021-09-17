import React from "react";
import { NavLink } from "react-router-dom";

const MovieListItem = ({
  id,
  movieName,
  rating,
  dateAdded,
  movieStill,
  availablePlatform,
}) => (
  <div className="collage">
    <div className="card">
      <NavLink to={`/modal/${id}`}>
        <img src={movieStill} height="300px" width="300" />
      </NavLink>
      <div className="container">
        <h2 className="movieName">{movieName}</h2>
        <h4 className="yearAdded"> Year Added: {dateAdded}</h4>
      </div>
    </div>
  </div>
);
export default MovieListItem;
