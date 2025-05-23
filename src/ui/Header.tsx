import { Link } from "react-router-dom";

import SearchMovie from "../features/browse/SearchMovie";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="max-w-screen-xl mx-auto bg-blue-300 rounded-lg">
      <div className="flex items-center justify-between gap-4 h-16 px-4 sm:px-8 md:px-12 min-w-0">
        <Link to="/" className="bg-red-400">
          Movie App
        </Link>
        <SearchMovie />
        <Username />
      </div>
    </div>
  );
}
export default Header;
