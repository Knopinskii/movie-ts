import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { MovieItem } from "../../types/types";
import { selectMovie } from "./selectedMovieSlice";
interface Props {
  movie: MovieItem;
}

function MovieCard({ movie }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(selectMovie(movie));
    navigate(`/moviedetails`);
  };

  return (
    <li key={movie.imdbID} onClick={handleClick}>
      <img src={movie.Poster} alt={movie.Poster} className="w-50 h-70" />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>{movie.imdbID}</p>
    </li>
  );
}

export default MovieCard;
