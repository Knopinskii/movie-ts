const API_KEY = "6fa3393b";
// const API = "http://www.omdbapi.com/?apikey=[yourkey]&s={query}"

import axios from "axios";
import type { MovieResponse } from "../types/types";

export async function getSearchResults(query: string): Promise<MovieResponse> {
  const res = await axios.get<MovieResponse>(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  );
  if (!res) throw Error("failed getting movies");
  return res.data;
}

export async function getMovieDetails(id: string): Promise<MovieResponse> {
  const res = await axios.get<MovieResponse>(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  );
  if (!res) throw Error("failed getting movies");
  return res.data;
}
