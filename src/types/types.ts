export interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  Poster: string;
}

export interface MovieResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: "True" | "False";
}
