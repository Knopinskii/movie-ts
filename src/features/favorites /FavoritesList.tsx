import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store";

function FavoritesList() {
  const favorite = useSelector((state: RootState) => state.user.username);
  return (
    <div className="text-6xl">
      <p>{favorite}, your favorite movies</p>
      <p>favorites list</p>
      <Link to="/"> &larr; open movies </Link>
    </div>
  );
}

export default FavoritesList;
