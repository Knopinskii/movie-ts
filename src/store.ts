import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import favoriteReducer from "./features/favorites/favoriteSlice";
import selectedMovieReducer from "./features/movies/selectedMovieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorite: favoriteReducer,
    selectedMovie: selectedMovieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
