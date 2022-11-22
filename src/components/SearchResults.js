import Preview from "./Preview";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSearch } from "../api/fetch";
import ErrorMessage from "./ErrorMessage";

export default function SearchResults() {
  const [searchVideos, setSearchVideos] = useState([]);
  const searchQuery = useParams();
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    getSearch(searchQuery.search)
      .then((res) => {
        setSearchVideos(res);
        setLoadingError(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  }, [searchQuery]);

  return (
    <section style={{ display: "flex", flexFlow: "row wrap" }}>
      {searchVideos.items &&
        searchVideos.items.map((video) => {
          return <Preview video={video} key={video.etag} />;
        })}
    </section>
  );
}
