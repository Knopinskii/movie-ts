import { Link } from "react-router-dom";

import SearchMovie from "../features/browse/SearchMovie";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm relative">
      <div className="flex items-center justify-between h-16 px-4 sm:px-8 md:px-12 relative">
        <Link
          to="/"
          className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition z-10"
        >
          🎬 Movie App
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 z-0">
          <SearchMovie />
        </div>

        <div className="text-gray-700 hover:text-blue-600 transition z-10">
          <Username />
        </div>
      </div>
    </div>
  );
}
export default Header;
