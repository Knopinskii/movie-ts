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
    <li
      key={movie.imdbID}
      onClick={handleClick}
      className="flex flex-col items-center justify-center p-5 bg-slate-300 hover:bg-slate-400 rounded-lg shadow-md cursor-pointer overflow-auto transition-colors duration-300"
      style={{ width: 336, height: 576 }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="object-cover rounded-md mb-5"
        style={{ width: "100%", height: 432 }}
      />
      <h2 className="text-center text-xl font-semibold text-gray-800 truncate w-full">
        {movie.Title}
      </h2>
      <p className="text-center text-base text-gray-600">{movie.Year}</p>
    </li>
  );
}

export default MovieCard;
