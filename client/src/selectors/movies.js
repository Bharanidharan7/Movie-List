export default (movies, { text, sortBy, startYear, endYear }) => {
  return movies
    .filter((movie) => {
      console.log(movie);
      const startDateMatch =
        typeof startYear !== "number" || movie.dateAdded >= startYear;
      const endDateMatch =
        typeof endYear !== "number" || movie.dateAdded <= endYear;
      const textMatch =
        movie.movieName.toLowerCase().includes(text.toLowerCase()) ||
        movie.actor.toLowerCase().includes(text.toLowerCase()) ||
        movie.director.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "dateAdded") {
        return a.dateAdded < b.dateAdded ? 1 : -1;
      } else if (sortBy === "rating") {
        return a.rating < b.rating ? 1 : -1;
      }
    });
};
