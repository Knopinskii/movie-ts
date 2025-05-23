import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchMovie() {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/searchresults/${encodeURIComponent(query)}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="py-2 px-3 w-96 rounded-lg focus:outline-none focus:ring-0 bg-sky-500 hover:bg-sky-700 "
      />
    </form>
  );
}
export default SearchMovie;
