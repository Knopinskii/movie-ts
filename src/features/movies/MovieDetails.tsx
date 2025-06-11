import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import type { MovieItem, MovieResponse } from "../../types/types";

const API_KEY = "6fa3393b";

function MovieDetails() {
  const selectedMovie = useSelector(
    (state: { selectedMovie: MovieItem }) => state.selectedMovie
  );

  const id = selectedMovie.selected.imdbID;
  const [movieDetails, setMovieDetails] = useState<MovieResponse | null>(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const res = await axios.get<MovieResponse>(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );
        setMovieDetails(res.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-10 flex flex-col md:flex-row gap-8">
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-full md:w-2/3">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {movieDetails.Title}
          </h1>
          <p className="text-sm text-gray-600 mb-1">{movieDetails.Released}</p>
          <p className="text-sm text-gray-600 mb-1">{movieDetails.Runtime}</p>
          <p className="text-sm text-gray-600 mb-4 italic">
            {movieDetails.Genre}
          </p>
          <p className="text-yellow-500 font-semibold mb-6">
            ⭐ {movieDetails.imdbRating} IMDb rating
          </p>
          <p className="text-gray-700 leading-relaxed">{movieDetails.Plot}</p>
        </div>

        <div className="mt-6 text-gray-700 space-y-1">
          <p>
            <strong>Starring:</strong> {movieDetails.Actors}
          </p>
          <p>
            <strong>Director:</strong> {movieDetails.Director}
          </p>
        </div>

        <div className="mt-8">
          <button className="bg-amber-600 text-white px-6 py-3 rounded-md shadow hover:bg-amber-700 transition">
            Add to my favorite list
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
