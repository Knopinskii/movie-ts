import Header from "./Header";
import FavoritesOverview from "../features/favorites /FavoritesOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen bg-gray-400 pt-5">
      {isLoading && <Loader />}

      <Header />

      <main className="max-w-screen-lg mx-auto px-4 py-8">
        <Outlet />
      </main>
      <div className="max-w-screen-lg mx-auto px-4 py-4">
        <FavoritesOverview />
      </div>
    </div>
  );
};
export default AppLayout;
