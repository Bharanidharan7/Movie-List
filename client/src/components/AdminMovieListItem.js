import React from "react";
import { NavLink } from "react-router-dom";

const AdminMovieListItem = ({ id, movieName, dateAdded, movieStill }) => (
  <div className="collage">
    <div className="card">
      <NavLink to={`/edit/${id}`}>
        <img src={movieStill} height="300px" width="275px" />
      </NavLink>
      <div className="container">
        <h3>{movieName}</h3>
        <p>Year Added: {dateAdded}</p>
      </div>
    </div>
  </div>
);

export default AdminMovieListItem;
