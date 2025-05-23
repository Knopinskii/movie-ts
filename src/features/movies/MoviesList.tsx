/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMovies } from "../../services/moviesApi";
import type { MovieResponse } from "../../types/types";
import MovieListItems from "./MovieListItems";

function MoviesList() {
  const data = useLoaderData<MovieResponse>();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-[800px] h-[700px] overflow-y-auto overflow-x-hidden bg-yellow-300 p-4 rounded-md">
        <ul className="w-full flex flex-col items-center gap-2">
          {data.Search.map((movie) => (
            <MovieListItems movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export async function loader() {
  return await getMovies();
}
export default MoviesList;
