import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MovieItem } from "../../types/types";

const initialState: { selectedMovie: MovieItem | null } = {
  selectedMovie: null,
};

const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {
    selectMovie(state, action: PayloadAction<MovieItem>) {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie(state) {
      state.selectedMovie = null;
    },
  },
});

export const { selectMovie, clearSelectedMovie } = selectedMovieSlice.actions;

export default selectedMovieSlice.reducer;
