import { useState } from "react";

import Preview from "./Preview";
import ErrorMessage from "./ErrorMessage";
import SearchResults from "./SearchResults";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const key = process.env.REACT_APP_API_KEY;

export default function Search() {
  const [searchTitle, setSearchTitle] = useState("");
  const [loadingError, setLoadingError] = useState(false);
  const navigate = useNavigate();

  function handleTextChange(e) {
    setSearchTitle(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/searchresults/${searchTitle}`);
    event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            id="searchBar"
            type="text"
            name="search"
            onChange={handleTextChange}
            placeholder="Search..."
          />
        </label>
        {/* <Link to={`/searchresults/${searchTitle}`} > */}
        <input className="searchButton" type="submit" value="🔍︎" />
        {/* </Link> */}
      </form>
    </div>
  );
}
