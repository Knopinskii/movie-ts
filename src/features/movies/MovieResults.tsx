/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";

import { getSearchResults } from "../../services/moviesApi";
import type { MovieResponse } from "../../types/types";

import MovieCard from "./MovieCard";

function MovieResults() {
  const data = useLoaderData<MovieResponse>();

  return (
    <div>
      <h1>Search results: {data.Search.length}</h1>
      <ul>
        {data.Search.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
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
