import { useState } from "react";

import Preview from "./Preview";
import ErrorMessage from "./ErrorMessage";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY

export default function Search() {
    const [searchTitle, setSearchTitle] = useState("");
    const [searchVideos, setSearchVideos] = useState([])
    const [loadingError, setLoadingError] = useState(false);

    function handleTextChange(e) {
      const title = e.target.value;
      setSearchTitle(title);
    }

    function searchYoutube(search) {
        fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${key}`)
        .then((res) => res.json())
        .then((res) => {
            setSearchVideos(res)
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        searchYoutube(searchTitle)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Search
                <input type="text" name="search" onChange={handleTextChange}/>
            </label>
            {/* <Link to="/SearchResults" > */}
            <input type="submit" value="Submit" />  
            {/* </Link> */}
        </form>
        <section>
            {searchVideos.items &&
              searchVideos.items.map((video) => {
                return <Preview video={video} key={video.id.videoId} />;
              })}
          </section>
        </div>
    )
}