/* eslint-disable react-refresh/only-export-components */
import {
  useLoaderData,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router-dom";

import { getSearchResults } from "../../services/moviesApi";
import type { MovieItem, MovieResponse } from "../../types/types";
import { useDispatch } from "react-redux";
import { selectMovie } from "./selectedMovieSlice";

interface Props {
  movie: MovieItem;
}

function MovieResults({ movie }: Props) {
  const data = useLoaderData<MovieResponse>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(selectMovie(movie));
    navigate(`/moviedetails`);
  };
  console.log(selectMovie(movie));

  return (
    <div>
      <h1>Search results: {data.totalResults}</h1>
      <ul onClick={handleClick}>
        {data.Search.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Poster} className="w-50 h-70" />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <p>{movie.imdbID}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function loader({
  params,
}: LoaderFunctionArgs): Promise<MovieResponse> {
  const query = params.query;
  if (!query) throw new Error("Missing query parameter");

  return await getSearchResults(query);
}

export default MovieResults;
