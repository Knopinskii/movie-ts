import type { MovieItem } from "../../types/types";

interface Props {
  movie: MovieItem;
}

function MovieListItems({ movie }: Props) {
  return (
    <li>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>

      <img src={movie.Poster} alt={movie.Poster} className="w-50 h-70" />
    </li>
  );
}

export default MovieListItems;
