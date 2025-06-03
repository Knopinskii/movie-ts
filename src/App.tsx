import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import MoviesList, {
  loader as moviesLoader,
} from "./features/movies/MoviesList";
import FavoritesList from "./features/favorites/FavoritesList";
import Error from "./ui/Error";
import SearchResults, {
  loader as searchLoader,
} from "./features/browse/SearchResults";
import Home from "./ui/Home";
import MovieDetails from "./features/movies/MovieDetails";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/movielist",
        element: <MoviesList />,
        errorElement: <Error />,
        loader: moviesLoader,
      },

      {
        path: "/favoriteslist",
        element: <FavoritesList />,
      },
      {
        path: "/searchresults/:query",
        element: <SearchResults />,
        loader: searchLoader,
        errorElement: <Error />,
      },
      {
        path: "/moviedetails",
        element: <MovieDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
