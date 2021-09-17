import React from "react";
import MovieList from "./MovieList";
import MovieListFilters from "./MovieListFilters";

const OttDashboardPage = () => (
  <div className="dashboard">
    <MovieListFilters />
    <MovieList />
  </div>
);

export default OttDashboardPage;
