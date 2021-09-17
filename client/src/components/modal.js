import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
let movie = {};
const MovieModal = (props) => {
  movie = props.movie.find((movie) => movie != undefined);
  return (
    <div>
      {movie !== undefined && (
        <div className="modal">
          <div className="moviePoster">
            <img src={movie.movieStill} width="450px" height="700px" />
          </div>
          <NavLink to="/" className="active-class2">
            ×
          </NavLink>
          <div className="banner">
            <h1>{movie.movieName}</h1>
            <p>Actors : {movie.actor}</p>
            <p>Runtime : {movie.runtime}</p>
            <p>Directors : {movie.director}</p>
            <p>Language : {movie.language}</p>
            <p>Year: {movie.dateAdded}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    movie: state.movies.map((movie) => {
      if (movie.id == props.match.params.id) {
        return movie;
      }
    }),
  };
};

export default connect(mapStateToProps)(MovieModal);
