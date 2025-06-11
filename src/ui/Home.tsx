import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import type { RootState } from "../store";

function Home() {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <div className="my-16 px-4 sm:px-6 text-center">
      <h1 className="mb-10 text-2xl sm:text-3xl font-semibold text-gray-800 tracking-tight">
        🎬 Discover the Best Movies
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <p className="mb-8 max-w-xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
          Your personal gateway to the world of cinema. Instantly search and
          explore popular and top-rated movies — with ratings, summaries, and
          release info at your fingertips.
        </p>
      )}
    </div>
  );
}

export default Home;
