import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MovieItem } from "../../types/types";

const initialState: { selected: MovieItem | null } = {
  selected: null,
};

const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {
    selectMovie(state, action: PayloadAction<MovieItem>) {
      state.selected = action.payload;
    },
    clearSelectedMovie(state) {
      state.selected = null;
    },
  },
});

export const { selectMovie, clearSelectedMovie } = selectedMovieSlice.actions;

export default selectedMovieSlice.reducer;
