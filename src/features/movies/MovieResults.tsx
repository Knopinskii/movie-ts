/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";

import { getSearchResults } from "../../services/moviesApi";
import type { MovieResponse } from "../../types/types";

import MovieCard from "./MovieCard";

function MovieResults() {
  const data = useLoaderData<MovieResponse>();

  return (
    <div className="px-4 py-6 max-h-[800px] overflow-y-auto bg-gray-50 rounded-md shadow-sm">
      <h1 className="mb-4 text-center text-xl font-semibold text-gray-800">
        Search results: {data.Search.length}
      </h1>
      <ul className="flex flex-col items-center gap-6">
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
