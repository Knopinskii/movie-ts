import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

import FavoritesList from "./features/favorites/FavoritesList";
import Error from "./ui/Error";
import MovieResults, {
  loader as searchLoader,
} from "./features/movies/MovieResults";
import Home from "./ui/Home";
import MovieDetails from "./features/movies/MovieDetails";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/favoriteslist",
        element: <FavoritesList />,
      },
      {
        path: "/searchresults/:query",
        element: <MovieResults />,
        loader: searchLoader,
        errorElement: <Error />,
      },
      {
        path: "/moviedetails",
        element: <MovieDetails />,

        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
