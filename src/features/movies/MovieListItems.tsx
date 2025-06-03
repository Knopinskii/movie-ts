import { useDispatch } from "react-redux";
import type { MovieItem } from "../../types/types";
import { selectMovie } from "./selectedMovieSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: MovieItem;
}

function MovieListItems({ movie }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(selectMovie(movie)); // сохраняем выбранный фильм
    navigate("/moviedetails"); // переходим на страницу деталей
  };

  return (
    <li onClick={handleClick}>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>

      <img src={movie.Poster} alt={movie.Poster} className="w-50 h-70" />
    </li>
  );
}

export default MovieListItems;
