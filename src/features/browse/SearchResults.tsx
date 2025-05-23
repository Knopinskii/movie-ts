/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";

import { getSearchResults } from "../../services/moviesApi";
import type { MovieResponse } from "../../types/types";

function SearchResults() {
  const data = useLoaderData<MovieResponse>();

  return (
    <div>
      <h1>Search results</h1>
      <ul>
        {data.Search.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
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

export default SearchResults;
