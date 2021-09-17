import React from "react";
import { connect } from "react-redux";
import MovieForm from "./MovieForm";
import { addMovie } from "../actions/movies";
import Axios from "axios";

export class AddMoviePage extends React.Component {
  onSubmit = (movie) => {
    this.props.addMovie(movie);
    this.props.history.push("/admin");
  };
  render() {
    return (
      <div>
        <h1>Add Movie</h1>
        <MovieForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie)),
});

export default connect(undefined, mapDispatchToProps)(AddMoviePage);
