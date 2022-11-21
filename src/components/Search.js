import { useState } from "react";

import Preview from "./Preview";
import ErrorMessage from "./ErrorMessage";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY;

export default function Search({ searchVideos, searchYoutube }) {
  const [searchTitle, setSearchTitle] = useState("");
  const [loadingError, setLoadingError] = useState(false);

  function handleTextChange(e) {
    const title = e.target.value;
    setSearchTitle(title);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // searchYoutube(searchTitle)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search:{" "}
          <input type="text" name="search" onChange={handleTextChange} />
        </label>
        <Link to={`/searchresults/${searchTitle}`}>
          <input type="submit" value="Submit" />
        </Link>
      </form>
    </div>
  );
}
