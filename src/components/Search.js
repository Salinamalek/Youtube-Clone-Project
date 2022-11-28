import { useState } from "react";

import Preview from "./Preview";
import ErrorMessage from "./ErrorMessage";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY;

export default function Search({searchTitle, setSearchTitle}) {
//   const [searchTitle, setSearchTitle] = useState("");
  const [loadingError, setLoadingError] = useState(false);

  function handleTextChange(e) {
    setSearchTitle(e.target.value);
  }

    function handleSubmit(event) {
        event.preventDefault()
        event.setSearchTitle("")
    }

    console.log(searchTitle)
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Search
                <input type="text" name="search" onChange={handleTextChange}/>
            </label>
            <Link to={`/searchresults/${searchTitle}`} >
            <input type="submit" value="Submit" />  
            </Link>
        </form>
    </div>
  );
}
