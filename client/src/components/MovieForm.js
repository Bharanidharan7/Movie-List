import React from "react";

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: props.movie ? props.movie.movieName : "",
      dateAdded: props.movie ? props.movie.dateAdded : "",
      movieStill: props.movie ? props.movie.movieStill : "",
      language: props.movie ? props.movie.language : "",
      runtime: props.movie ? props.movie.runtime : "",
      actor: props.movie ? props.movie.actor : "",
      director: props.movie ? props.movie.director : "",
      error: "",
    };
  }

  onMovieNameChange = (e) => {
    const movieName = e.target.value;
    this.setState(() => ({ movieName }));
  };
  onRatingChange = (e) => {
    const rating = e.target.value;
    if (!rating || rating.match(/^\d{1,1}(\.\d{0,1})?$/)) {
      this.setState(() => ({ rating }));
    }
  };
  onDateChange = (e) => {
    const dateAdded = e.target.value;
    this.setState(() => ({ dateAdded }));
  };
  onRuntimeChange = (e) => {
    const runtime = e.target.value;
    this.setState(() => ({ runtime }));
  };
  onActorChange = (e) => {
    const actor = e.target.value;
    this.setState(() => ({ actor }));
  };
  onDirectorChange = (e) => {
    const director = e.target.value;
    this.setState(() => ({ director }));
  };
  onLanguageChange = (e) => {
    const language = e.target.value;
    this.setState(() => ({ language }));
  };
  onMovieStillChange = (e) => {
    const movieStill = e.target.value;
    this.setState(() => ({ movieStill }));
  };
  onMovieNameChange = (e) => {
    const movieName = e.target.value;
    this.setState(() => ({ movieName }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.movieName) {
      this.setState(() => ({ error: "Please provide movie name." }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        movieName: this.state.movieName,
        dateAdded: parseFloat(this.state.dateAdded),
        actor: this.state.actor,
        director: this.state.director,
        movieStill: this.state.movieStill,
        language: this.state.language,
        runtime: this.state.runtime,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="addmoviebox" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="movieName"
            autoFocus
            value={this.state.movieName}
            onChange={this.onMovieNameChange}
          />
          <input
            type="number"
            placeholder="Year added"
            value={this.state.dateAdded}
            onChange={this.onDateChange}
          />
          <input
            type="text"
            placeholder="Language"
            value={this.state.language}
            onChange={this.onLanguageChange}
          />
          <input
            type="text"
            placeholder="actors"
            value={this.state.actor}
            onChange={this.onActorChange}
          />
          <input
            type="text"
            placeholder="directors"
            value={this.state.director}
            onChange={this.onDirectorChange}
          />
          <input
            type="text"
            placeholder="link to the movie poster"
            value={this.state.movieStill}
            onChange={this.onMovieStillChange}
          />
          <input
            type="text"
            placeholder="run time"
            value={this.state.runtime}
            onChange={this.onRuntimeChange}
          />
          <button className="movieformbutton">Add movie</button>
        </form>
      </div>
    );
  }
}
