import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import type { MovieItem, MovieResponse } from "../../types/types";

const API_KEY = "6fa3393b";

function MovieDetails() {
  const selectedMovie = useSelector(
    (state: { selectedMovie: MovieItem }) => state.selectedMovie
  );

  const id = selectedMovie.selected?.imdbID;
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

    if (id) fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <div>
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
      </div>
      <div>
        <p>{movieDetails.Title}</p>
        <p>{movieDetails.Released}</p>
        <p>{movieDetails.Runtime}</p>
        <p>{movieDetails.Genre}</p>
        <p>{movieDetails.imdbRating} IMDb rating</p>
      </div>
      <div>
        <p>{movieDetails.Plot}</p>
        <p>
          <b>Starring {movieDetails.Actors} </b>
        </p>
        <p>Director {movieDetails.Director}</p>
      </div>
      <div>
        <button className="bg-amber-600">Add to my favorite list</button>
      </div>
    </div>
  );
}

export default MovieDetails;
