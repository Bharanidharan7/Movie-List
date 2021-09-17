import Axios from "axios";
// ADD_MOVIE
export const addMovieTo = (movie) => ({
  type: "ADD_MOVIE",
  movie,
});

export const addMovie = (movieData = {}) => {
  return (dispatch) => {
    const {
      movieName = "",
      rating = "",
      dateAdded = "",
      synopsis = "",
      language = "",
      availablePlatform = "",
      actor = "",
      director = "",
      genres = "",
      runtime = "",
      movieStill = "",
      trailerLink = "",
      award = "",
    } = movieData;
    const movie = {
      movieName,
      rating,
      dateAdded,
      synopsis,
      language,
      availablePlatform,
      actor,
      director,
      genres,
      runtime,
      movieStill,
      trailerLink,
      award,
    };
    Axios.post("http://localhost:3001/create", movie)
      .then((movie) => {
        console.log(movie);
        dispatch(addMovieTo({ ...movie }));
      })
      .then(alert("Movie added"))
      .then(location.reload());
  };
};
const fetchMoviesSuccess = (movie) => ({
  type: "POPULATE_STORE",
  movie,
});

export const fetchMovies = () => {
  return (dispatch) => {
    return Axios.get("http://localhost:3001/show").then((response) => {
      dispatch(fetchMoviesSuccess(response.data));
    });
  };
};

// REMOVE_MOVIE

const removeMovieFrom = (id) => ({
  type: "REMOVE_MOVIE",
  id,
});

export const removeMovie = ({ id } = {}) => {
  return (dispatch) => {
    return Axios.delete(`http://localhost:3001/delete/${id}`).then(
      (response) => {
        dispatch(removeMovieFrom(response)).then(location.reload());
      }
    );
  };
};

// EDIT_MOVIE
const editMovieUpdate = (id, updates) => ({
  type: "EDIT_MOVIE",
  id,
  updates,
});

export const editMovie = (id, updates) => {
  return (dispatch) => {
    return Axios.put("http://localhost:3001/update", { id, updates }).then(
      (response) => {
        dispatch(editMovieUpdate(id, response)).then(location.reload());
      }
    );
  };
};
