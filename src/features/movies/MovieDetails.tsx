import { useSelector } from "react-redux";
import type { MovieItem } from "../../types/types";

function MovieDetails() {
  const selectedMovie = useSelector(
    (state: { selectedMovie: MovieItem }) => state.selectedMovie
  );

  return <p>id: {selectedMovie.id}</p>;
}

export default MovieDetails;
