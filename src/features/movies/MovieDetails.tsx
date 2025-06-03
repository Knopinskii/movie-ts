import { useSelector } from "react-redux";
import type { MovieItem } from "../../types/types";

const MovieDetails = () => {
  const selectedMovie = useSelector(
    (state: { selectedMovie: MovieItem }) => state.selectedMovie
  );
  console.log(selectedMovie);

  return (
    <div>
      <p>id: {selectedMovie.imdbID}</p>
    </div>
  );
};
export default MovieDetails;
