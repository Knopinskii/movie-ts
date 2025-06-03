import { Link } from "react-router-dom";

function FavoritesOverview() {
  return (
    <div className="flex items-center justify-center gap-5">
      <p>
        <span>2 movies</span>
      </p>
      <Link to="/favoriteslist">open favorites &rarr; </Link>
    </div>
  );
}

export default FavoritesOverview;
