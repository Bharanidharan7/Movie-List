import React from "react";
import AdminMovieList from "./AdminMovieList";
import MovieListFilters from "./MovieListFilters";
import { NavLink } from "react-router-dom";

const AdminPage = () => (
  <div>
    <NavLink to="/addmovie" className="active-class">
      Add movie
    </NavLink>
    <NavLink to="/" className="active-class1">
      Logout
    </NavLink>
    <MovieListFilters />
    <AdminMovieList />
  </div>
);

export default AdminPage;
