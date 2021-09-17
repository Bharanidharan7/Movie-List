import React from "react";
import { connect } from "react-redux";
import MovieForm from "./MovieForm";
import { editMovie, removeMovie } from "../actions/movies";

const EditMoviePage = (props) => {
  return (
    <div>
      <MovieForm
        movie={props.movie.find((movie) => movie !== undefined)}
        onSubmit={(movie) => {
          const iedy = props.movie.find((movie) => movie !== undefined);
          props.dispatch(editMovie(iedy.id, movie));
          props.history.push("/admin");
        }}
      />
      <button
        className="removebutton"
        onClick={() => {
          const iedy = props.movie.find((movie) => movie !== undefined);
          props.dispatch(removeMovie({ id: iedy.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
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

export default connect(mapStateToProps)(EditMoviePage);
