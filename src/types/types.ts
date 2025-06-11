export interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  Poster: string;
  selected: string;
}

export interface MovieResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: "True" | "False";
}
