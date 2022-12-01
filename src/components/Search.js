import { useState } from "react";

import ErrorMessage from "./ErrorMessage";
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
    if (!searchTitle) {
      setLoadingError(true);
    } else {
      setLoadingError(false);
      navigate(`/searchresults/${searchTitle}`);
    }
    event.target.reset();
  }

  return (
    <div>
      <section className="errorMsg">
        {loadingError ? <ErrorMessage /> : null}
      </section>
      <br />
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
        <input className="searchButton" type="submit" value="🔍︎" />
      </form>
    </div>
  );
}
