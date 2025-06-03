import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MovieItem } from "../../types/types";

const initialState: { favorite: MovieItem[] } = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<MovieItem>) {
      state.favorite.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.favorite = state.favorite.filter(
        (item) => item.imdbID !== action.payload
      );
    },
    clearFavorite(state) {
      state.favorite = [];
    },
  },
});

export const { addItem, deleteItem, clearFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
